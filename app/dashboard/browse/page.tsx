"use client";
import { Button } from "@/components/ui/button";
import { prismaDb } from "@/lib/database";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <div className="shadow w-[500px] ms-12 mt-12">
        <h1 className="font-bold text-center mb-5 text-xlr">
          Ioe Thapathali campus
        </h1>
        <Button
          className="w-full"
          onClick={() => {
            console.log("click");
            router.push(
              "/dashboard/routine/b9538cdd-8865-4aea-8d76-132c14ebf813/66250499-12e1-4bd4-91cd-e366ccf3ec44"
            );
          }}
        >
          View Routine
        </Button>
      </div>
    </div>
  );
};

export default page;
