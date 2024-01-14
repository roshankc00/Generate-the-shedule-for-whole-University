"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Subject } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
interface Field {
  name: string;
  sections: number;
  subSections: number;
  subjects: Array<string>;
}

type Props = {
  instituteId: string;
  allSubjects: Subject[];
};

const ClassListForm: React.FC<Props> = ({ instituteId, allSubjects }) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [fields, setFields] = useState<Field[]>([
    { name: "", sections: 2, subSections: 2, subjects: [] },
  ]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFields: any = [...fields];
    newFields[index][event?.target?.name] = event.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([
      ...fields,
      { name: "", sections: 2, subSections: 2, subjects: [] },
    ]);
  };

  const handleRemoveField = (index: number) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };
  const handleSubmit = async () => {
    const body = { datas: [...fields], instituteId: instituteId };
    try {
      setisLoading(true);
      const response = await axios.post("/api/classinfo", body);
      if (response?.data?.success) {
        toast.success(response?.data?.message || "Class created Successfully");
        router.push(`/dashboard/routine/${instituteId}/teachers`);
      } else {
        toast.error(response?.data?.message || "Unable to Create the class");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  const options = allSubjects?.map((sub: Subject) => ({
    label: sub.name,
    value: sub.id,
  }));
  const handleChangeform = (selectedOptions: any, index: number) => {
    const newFields = [...fields];
    const selectedValues = selectedOptions?.map((option: any) => option.value);
    newFields[index].subjects = selectedValues;
    setFields(newFields);
  };
  return (
    <div>
      {fields.map((field, index) => (
        <div key={index} className="w-[500px]">
          <Label className="font-semibold">Class Name</Label>
          <Input
            type="text"
            placeholder="eg:BctAB"
            className="mt-1 mb-2"
            name="name"
            value={field?.name}
            onChange={(event) => handleChange(index, event)}
          />
          <Label className="font-semibold">No of Section</Label>

          <Input
            type="number"
            placeholder="eg:4"
            className="mt-1 mb-2"
            name="sections"
            value={field?.sections}
            onChange={(event) => handleChange(index, event)}
          />
          <Label className="font-semibold">No of Subsections</Label>
          <Input
            type="text"
            placeholder="eg:2"
            className="mt-1 mb-2"
            name="subSections"
            value={field?.subSections}
            onChange={(event) => handleChange(index, event)}
          />
          <Label className="font-semibold"> Select all the subjects</Label>
          <Select
            className="mt-1 mb-2"
            options={options}
            isMulti
            onChange={(selectedOptions) =>
              handleChangeform(selectedOptions, index)
            }
          />

          {fields?.length >= 2 && (
            <Button
              variant={"destructive"}
              type="button"
              className="mt-2"
              onClick={() => handleRemoveField(index)}
            >
              Remove
            </Button>
          )}
        </div>
      ))}
      <div className="flex justify-between w-[500px]">
        <Button type="button" className="mt-2" onClick={handleAddField}>
          Add Field
        </Button>
        <Button
          type="button"
          className="mt-2"
          disabled={
            fields.length >= 2 &&
            fields[0].name &&
            fields[0].sections &&
            fields[0].subSections
              ? false
              : true
          }
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ClassListForm;
