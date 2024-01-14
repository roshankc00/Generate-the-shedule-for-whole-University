import React from "react";
import ClassListForm from "../../_components/forms/Class-form";
import { prismaDb } from "@/lib/database";
import TeacherListForm from "../../_components/forms/Teacher.form";
type Props = {
  params: {
    instituteId: string;
  };
};

const TeachersPage = async ({ params }: Props) => {
  const allSubjects = await prismaDb.subject.findMany({
    where: {
      instituteId: params.instituteId,
    },
  });

  const allClasses = await prismaDb.classroom.findMany({
    where: {
      instituteId: params.instituteId,
    },
  });
  console.log(allClasses, "class");
  console.log(allSubjects);
  return (
    <div className="mt-[5%]">
      <h1 className="text-2xl font-bold text-center">Teachers Form</h1>
      <div className="flex justify-center ">
        <TeacherListForm
          instituteId={params.instituteId}
          allSubjects={allSubjects}
          allClasses={allClasses}
        />
      </div>
    </div>
  );
};

export default TeachersPage;
