import { prismaDb } from "@/lib/database";
import { NextResponse } from "next/server";
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../utils/response.formatter";
import { successMessages } from "../constants/api.message";

export async function POST(req: Request) {
  try {
    const { name, class_ends, class_starts, period_intervals } =
      await req.json();
    const institute = await prismaDb.institute.create({
      data: {
        name,
        class_ends,
        class_starts,
        period_intervals,
      },
    });
    return sendSuccessResponse(successMessages.Institute.CREATE, institute);
  } catch (error) {
    console.log(error);
    return sendErrorResponse("Internal server error", 500);
  }
}
