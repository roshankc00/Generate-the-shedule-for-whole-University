import React from "react";
import ClassListForm from "../../_components/forms/Class-form";
import { prismaDb } from "@/lib/database";
type Props = {
  params: {
    instituteId: string;
  };
};

const ClasssPage = async ({ params }: Props) => {
  const allSubjects = await prismaDb.subject.findMany({
    where: {
      instituteId: params.instituteId,
    },
  });

  return (
    <div className="mt-[5%]">
      <h1 className="text-2xl font-bold text-center">Classes Form</h1>
      <div className="flex justify-center ">
        <ClassListForm
          instituteId={params.instituteId}
          allSubjects={allSubjects}
        />
      </div>
    </div>
  );
};

export default ClasssPage;
