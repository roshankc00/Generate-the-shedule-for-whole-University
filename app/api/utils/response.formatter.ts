import { ApiResponse } from "@/interfaces/global.interface";

export const sendSuccessResponse = <T>(
  message: string,
  data: T,
  status: number = 200
): any => {
  const responseBody: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  return new Response(JSON.stringify(responseBody), { status });
};

export const sendErrorResponse = (
  message: string,
  status: number = 500
): any => {
  const responseBody: ApiResponse = {
    success: false,
    error: {
      message,
    },
  };

  return new Response(JSON.stringify(responseBody), { status });
};

export const sendSuccessResponseWithMessage = <T>(
  message: string,
  status: number = 200
): any => {
  const responseBody: ApiResponse<T> = {
    success: true,
    message,
  };
  return new Response(JSON.stringify(responseBody), { status });
};
