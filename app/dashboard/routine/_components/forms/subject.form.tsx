"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Select from "react-select";
import toast from "react-hot-toast";
import { Label } from "@radix-ui/react-label";

interface Field {
  name: string;
  creditHrs: number | undefined;
}

type Props = {
  instituteId: string;
};

const SubjectForm: React.FC<Props> = ({ instituteId }) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [fields, setFields] = useState<Field[]>([
    { name: "", creditHrs: undefined },
  ]);

  const handleChange = (index: number, event: any, fieldKey: string) => {
    const newFields: any = [...fields];

    newFields[index][fieldKey] = event.target.value;

    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { name: "", creditHrs: undefined }]);
  };

  const handleRemoveField = (index: number) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleFormSubmit = async () => {
    try {
      setisLoading(true);
      const response = await axios.post(`/api/subjectinfo`, {
        datas: [...fields],
        instituteId,
      });
      if (response?.data?.success) {
        toast.success(response?.data?.message || "Subjects added successfully");
        router.push(`/dashboard/routine/${instituteId}/classes`);
      } else {
        toast.error(response?.data?.message || "Unable to add the subjects");
      }
    } catch (error) {
      toast.error("Unable to add the subjects");
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="mb-[50%]">
      {fields.map((field, index) => (
        <div key={index} className="w-[500px]">
          <Label className="font-medium"> Subject Name</Label>
          <Input
            type="text"
            placeholder="Subject"
            className="mt-2"
            name="name"
            value={field.name}
            onChange={(event) => handleChange(index, event, "name")}
          />
          <Label className="font-medium"> Periods</Label>
          <Input
            type="number"
            placeholder="period"
            className="mt-2"
            name="creditHrs"
            value={field.creditHrs}
            onChange={(event: any) => handleChange(index, event, "creditHrs")}
          />

          <Button
            variant={"destructive"}
            type="button"
            className="mt-2"
            onClick={() => handleRemoveField(index)}
          >
            Remove
          </Button>
        </div>
      ))}
      <div className="flex justify-between">
        <Button type="button" className="mt-2" onClick={handleAddField}>
          Add Field
        </Button>
        <Button
          type="button"
          className="mt-2"
          onClick={() => {
            handleFormSubmit();
          }}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default SubjectForm;
