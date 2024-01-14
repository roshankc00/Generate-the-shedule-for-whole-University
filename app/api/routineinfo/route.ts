import { prismaDb } from "@/lib/database";
import { NextResponse } from "next/server";
import {
  sendErrorResponse,
  sendSuccessResponse,
  sendSuccessResponseWithMessage,
} from "../utils/response.formatter";
import { successMessages } from "../constants/api.message";
import { getAlgo } from "@/lib/algo";

interface IClassBody {
  name: string;
  sections: number;
  subSections: number;
  subjects: Array<string>;
}

export async function POST(req: Request) {
  try {
    const { instituteId } = await req.json();

    if (!instituteId) {
      return sendErrorResponse("Institute field is required", 400);
    }

    const instituteInfo = await prismaDb.institute.findUnique({
      where: {
        id: instituteId,
      },
    });
    if (!instituteInfo) {
      return sendErrorResponse("Institute with this id doesnt exist", 400);
    }
    const instituteInfoForAlgo = {
      Orgination_name: instituteInfo.name,
      working_days: 6,
      duration: 12,
      class_starts: `1970-01-01T${instituteInfo.class_starts}:00:00`,
      class_ends: `1970-01-01T${instituteInfo.class_ends}:00:00`,
      period_intervals: instituteInfo.period_intervals,
    };

    // lets wrap for the subjects
    const subjectsInfo = await prismaDb.subject.findMany({
      where: {
        instituteId: instituteId,
      },
    });
    const subjectsInfoForAlgo = subjectsInfo.map((subject) => ({
      name: subject.name,
      creditHr: subject.creditHrs,
    }));

    // all classrooms with subjects and teachersubject
    const classroomDetals = await prismaDb.classroom.findMany({
      where: {
        instituteId: instituteId,
      },
      include: {
        subjects: {
          include: {
            subject: true,
          },
        },
      },
    });

    let classroomDetalsForAlgo = classroomDetals.map((classinfo, index) => ({
      name: classinfo.name,
      id: index + 1,
      sections: classinfo.sections,
      subSections: classinfo.subSections,
      subjects: classinfo.subjects.map((sub) => sub.subject.name),
    }));

    const teacherinfo = await prismaDb.teacher.findMany({
      where: {
        institueId: instituteId,
      },
      include: {
        subjects: {
          include: {
            subject: true,
            classrooms: true,
          },
        },
      },
    });

    const teacherinfoForAlgo = teacherinfo.map((da: any) => ({
      name: da.name,
      max_period: da.max_period,
      subjects: da.subjects?.map((sub, index) => ({
        subject: sub.subject.name,
        classId: index + 1,
        class: sub.classrooms.name,
        credit: sub.creditHrs,
      })),
    }));

    const loadData = {
      ...instituteInfoForAlgo,
      subjects: subjectsInfoForAlgo,
      classrooms: classroomDetalsForAlgo,
      teachers: teacherinfoForAlgo,
    };
    const response = await getAlgo(loadData);
    if (response) {
      const wow = await prismaDb.modifiedRoutine.create({
        data: {
          routinedata: response,
        },
      });
      return NextResponse.json({ data: wow });
    }
  } catch (error) {
    console.log(error);
    return sendErrorResponse("Internal server error", 500);
  }
}
