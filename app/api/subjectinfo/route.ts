import { prismaDb } from "@/lib/database";
import { NextResponse } from "next/server";
import {
  sendErrorResponse,
  sendSuccessResponse,
  sendSuccessResponseWithMessage,
} from "../utils/response.formatter";
import { successMessages } from "../constants/api.message";

interface ISubjectBody {
  name: string;
  creditHrs: number;
}

export async function POST(req: Request) {
  try {
    const { datas, instituteId } = await req.json();
    datas.map(async (data: { name: string; creditHrs: number }) => {
      let response = await prismaDb.subject.create({
        data: {
          name: data?.name,
          creditHrs: +data.creditHrs,
          instituteId: instituteId,
        },
      });
      console.log(response);
    });
    return sendSuccessResponseWithMessage("Subjects added successfully", 200);
  } catch (error) {
    console.log(error);
    return sendErrorResponse("Internal server error", 500);
  }
}
