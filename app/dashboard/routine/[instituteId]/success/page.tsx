"use client";
import { Button } from "@/components/ui/button";
import { getAlgo } from "@/lib/algo";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  params: {
    instituteId: string;
  };
};

const SuccessPage = ({ params }: Props) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  console.log(params.instituteId);

  const handleSubmit = async () => {
    try {
      setisLoading(true);
      const response = await axios.post("/api/routineinfo", {
        instituteId: params.instituteId,
      });
      toast.success("Routine created successfully");
      router.push(
        `/dashboard/routine/${params.instituteId}/${response?.data?.data?.id}`
      );
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <div className="ms-10 flex justify-center mt-[10%]">
      <div className="shadow-md p-4">
        <h1 className="mb-10">You have Successfully Inserted all the field</h1>
        <div className="flex items-center justify-between">
          <Button className="w-full" onClick={() => handleSubmit()}>
            {" "}
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Publish Routine"
            )}
            {isLoading}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
