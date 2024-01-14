// avoiding multiple instance of the prisma during the development mode
import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: PrismaClient | undefined;
}

export const prismaDb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismaDb;
