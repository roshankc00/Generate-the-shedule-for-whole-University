import React from "react";
import ClassInfoForm from "../_components/forms/Class-form";
import SubjectForm from "../_components/forms/subject.form";

type Props = {
  params: {
    instituteId: string;
  };
};

const page: React.FC<Props> = ({ params }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-3">
        Create All Subject of your university
      </h1>
      <div className="flex justify-center ">
        <div className="">
          <SubjectForm instituteId={params.instituteId} />
        </div>
      </div>
    </div>
  );
};

export default page;
