"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Classroom, Subject } from "@prisma/client";
import axios from "axios";
import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import Select from "react-select";

interface Field {
  name: string;
  max_period: number;
  subjects: Array<{
    subject: string;
    class: string;
    creditHrs: number | undefined;
  }>;
}

type Props = {
  instituteId: string;
  allSubjects: Subject[];
  allClasses: Classroom[];
};

const TeacherListForm: React.FC<Props> = ({
  allClasses,
  allSubjects,
  instituteId,
}) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [fields, setFields] = useState<Field[]>([
    {
      name: "",
      max_period: undefined,
      subjects: [{ subject: "", class: "", creditHrs: undefined }],
    },
  ]);

  const handleNameChange = (index: number, value: string) => {
    const newFields = [...fields];
    newFields[index].name = value;
    setFields(newFields);
  };

  const handlemax_periodChange = (index: number, value: number) => {
    const newFields = [...fields];
    newFields[index].max_period = +value;
    setFields(newFields);
  };

  const handleSubjectChange = (
    fieldIndex: number,
    subjectIndex: number,
    selectedSubject: { value: string; label: string } | null,
    selectedClass: { value: string; label: string } | null,
    key: string,
    value: string | number | boolean | undefined
  ) => {
    const newFields = [...fields];
    const updatedSubject = newFields[fieldIndex].subjects[subjectIndex];

    if (selectedSubject) {
      updatedSubject.subject = selectedSubject.value;
    }

    if (selectedClass) {
      updatedSubject.class = selectedClass.value;
    }

    updatedSubject[key] = value;

    setFields(newFields);
  };

  const handleAddSubject = (fieldIndex: number) => {
    const newFields = [...fields];
    newFields[fieldIndex].subjects.push({
      subject: "",
      class: "",
      creditHrs: undefined,
    });
    setFields(newFields);
  };

  const handleRemoveSubject = (fieldIndex: number, subjectIndex: number) => {
    const newFields = [...fields];
    newFields[fieldIndex].subjects.splice(subjectIndex, 1);
    setFields(newFields);
  };

  const handleRemoveField = (index: number) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([
      ...fields,
      {
        name: "",
        max_period: undefined,
        subjects: [{ subject: "", class: "", creditHrs: undefined }],
      },
    ]);
  };

  const classOptions = allClasses.map((el) => ({
    label: el.name,
    value: el.id,
  }));

  const subjectOptions = allSubjects.map((sub) => ({
    label: sub.name,
    value: sub.id,
  }));

  const handleSubmit = async () => {
    try {
      setisLoading(true);
      const body = { datas: [...fields], instituteId };
      const response = await axios.post("/api/teacherinfo", body);
      toast.success(response?.data?.message || "Teachers created successfully");
      router.push(`/dashboard/routine/${instituteId}/success`);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  const labOption = [
    {
      label: "Lab",
      value: true,
    },
    {
      label: "Normal Class",
      value: false,
    },
  ];

  return (
    <div className="mb-[50%]">
      {fields.map((field, fieldIndex) => (
        <div key={fieldIndex} className="mt-10">
          <Label className="font-semibold text-[16px] mb-2 mt-4">
            Teacher Name
          </Label>
          <Input
            type="text"
            placeholder="eg:Jkm sir"
            name="name"
            value={field.name}
            className="w-[400px] mb-4"
            onChange={(e) => handleNameChange(fieldIndex, e.target.value)}
          />
          <Label className="font-semibold text-[16px] mb-2">
            Max_period_per_day
          </Label>
          <Input
            type="text"
            placeholder="eg:5"
            name="max_period"
            value={field.max_period}
            className="w-[400px] mb-4"
            onChange={(e) =>
              handlemax_periodChange(fieldIndex, +e.target.value)
            }
          />
          {field.subjects.map((subject, subjectIndex) => (
            <div key={subjectIndex}>
              <Label className="font-semibold text-[16px] mb-2">Subject</Label>
              <Select
                options={subjectOptions}
                className="mb-4"
                onChange={(selectedSubject) =>
                  handleSubjectChange(
                    fieldIndex,
                    subjectIndex,
                    selectedSubject,
                    null,
                    "subject",
                    selectedSubject.value
                  )
                }
                placeholder="Select a subject"
              />
              <Label className="font-semibold text-[16px] mb-2">Class</Label>
              {
                <Select
                  options={classOptions}
                  onChange={(selectedClass) =>
                    handleSubjectChange(
                      fieldIndex,
                      subjectIndex,
                      null,
                      selectedClass,
                      "class",
                      selectedClass.value
                    )
                  }
                  placeholder="Select a class"
                  className="mb-4"
                />
              }
              <Label className="font-semibold text-[16px] mb-2">
                Credit hrs
              </Label>
              <Input
                type="number"
                placeholder="Credit Hours"
                className="w-[400px] mb-4"
                value={subject.creditHrs}
                onChange={(e) =>
                  handleSubjectChange(
                    fieldIndex,
                    subjectIndex,
                    null,
                    null,
                    "creditHrs",
                    +e.target.value
                  )
                }
              />
              <Button
                className="mb-4 mt-4 ml-auto"
                variant="destructive"
                onClick={() => handleRemoveSubject(fieldIndex, subjectIndex)}
              >
                Remove Subject
              </Button>
            </div>
          ))}
          <Button className="" onClick={() => handleAddSubject(fieldIndex)}>
            <Plus />
            Add Subject
          </Button>
          <Button
            variant="destructive"
            className="relative top-[40px] w-[180px] left-[20%]"
            onClick={() => handleRemoveField(fieldIndex)}
          >
            Remove Field
          </Button>
        </div>
      ))}
      <Button className="w-[180px] flex gap-2" onClick={handleAddField}>
        <Plus />
        Add Field
      </Button>
      <Button className=" w-full mt-2" onClick={() => handleSubmit()}>
        {isLoading ? <Loader2 className="animate-spin" /> : "Save"}
      </Button>
    </div>
  );
};

export default TeacherListForm;
