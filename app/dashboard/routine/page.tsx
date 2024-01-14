import React from "react";
import Shedule from "./_components/Shedule";
import BasicInfoForm from "./_components/forms/Basicinfo.form";
import SubjectInfoForm from "./_components/forms/subject.form";
import TeacherInfoForm from "./_components/forms/Teacher.form";
import ClassInfoForm from "./_components/forms/Class-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-auto ms-[10%] gap-[10%]">
      <div className=" ms-10 mt-10">
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex gap-1">
                {" "}
                <Plus /> Add Routine
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Basic Information</DialogTitle>
                <DialogDescription>
                  Make changes to your Instititute info here. Click save when
                  you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 p-4">
                <BasicInfoForm />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        {/* <div className="mt-10">
          <h1 className="font-bold text-xl mb-2">Teacher Information</h1>
          <TeacherInfoForm />
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-xl mb-2">Class Information</h1>
          <ClassInfoForm />
        </div> */}
      </div>
    </div>
  );
}

export default page;
