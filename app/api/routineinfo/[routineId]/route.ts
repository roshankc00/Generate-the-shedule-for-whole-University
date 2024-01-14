import { prismaDb } from "@/lib/database";
import { sendSuccessResponse } from "../../utils/response.formatter";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { routineId } }) {
  try {
    const data = await prismaDb.modifiedRoutine.findUnique({
      where: {
        id: params.routineId,
      },
    });
    if (!data) {
      return new NextResponse("not found", { status: 404 });
    }
    return sendSuccessResponse("routine fetched successfully", data, 200);
  } catch (error) {
    console.log(error);
  }
}
