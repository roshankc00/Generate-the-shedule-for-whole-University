import { prismaDb } from "@/lib/database";
import { NextResponse } from "next/server";
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../../utils/response.formatter";
import { successMessages } from "../../constants/api.message";

export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: {
      instituteId: string;
    };
  }
) {
  try {
    const body = await req.json();
    const institute = await prismaDb.institute.findUnique({
      where: {
        id: params.instituteId,
      },
    });
    if (!institute) {
      return sendErrorResponse("institute with this id doesnt exist", 400);
    }
    return sendSuccessResponse(successMessages.Institute.UPDATE, institute);
  } catch (error) {
    return sendErrorResponse("Internal server error", 500);
  }
}
