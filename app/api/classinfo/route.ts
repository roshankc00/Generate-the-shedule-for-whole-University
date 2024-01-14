import { prismaDb } from "@/lib/database";
import { NextResponse } from "next/server";
import {
  sendErrorResponse,
  sendSuccessResponse,
  sendSuccessResponseWithMessage,
} from "../utils/response.formatter";
import { successMessages } from "../constants/api.message";

interface IClassBody {
  name: string;
  sections: number;
  subSections: number;
  subjects: Array<string>;
}

export async function POST(req: Request) {
  try {
    const { datas, instituteId }: { datas: IClassBody[]; instituteId: string } =
      await req.json();

    console.log(datas);

    const allClassrooms = await Promise.all(
      datas.map(async (data: IClassBody) => {
        const response = await prismaDb.classroom.create({
          data: {
            name: data.name,
            sections: +data.sections,
            subSections: +data.subSections,
            instituteId: instituteId,
          },
        });

        await Promise.all(
          data.subjects.map(async (subjectId, index) => {
            await prismaDb.classroomSubject.create({
              data: {
                classroomId: response.id,
                subjectId,
              },
            });
          })
        );

        return response;
      })
    );

    return sendSuccessResponseWithMessage("Classes added successfully", 200);
  } catch (error) {
    console.log(error);
    return sendErrorResponse("Internal server error", 500);
  }
}
