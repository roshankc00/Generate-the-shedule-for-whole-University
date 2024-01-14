import { redirect } from "next/navigation";
import Image from "next/image";
import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  } else {
    redirect("/dashboard/routine");
  }
  return null;
}
