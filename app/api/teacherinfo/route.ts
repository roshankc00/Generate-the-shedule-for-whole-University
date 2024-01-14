import { prismaDb } from "@/lib/database";
import {
  sendErrorResponse,
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
      datas.map(async (data: any) => {
        const response = await prismaDb.teacher.create({
          data: {
            name: data.name,
            institueId: instituteId,
            max_period: data.max_period,
          },
        });

        await Promise.all(
          data.subjects.map(async (el: any, index) => {
            await prismaDb.teacherSubject.create({
              data: {
                teacherId: response.id,
                subjectId: el.subject,
                classId: el.class,
                creditHrs: +el.creditHrs,
              },
            });
          })
        );

        return response;
      })
    );

    return sendSuccessResponseWithMessage("Teachers added successfully", 200);
  } catch (error) {
    console.log(error);
    return sendErrorResponse("Internal server error", 500);
  }
}
