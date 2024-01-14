"use client";
import React from "react";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SingleSubjectInfoForm = () => {
  const router = useRouter();

  return (
    <div>
      <Input placeholder="Enter the subject name" />
      <Input placeholder="Enter the credit Hrs" className="mt-2" />
      <Button className="mt-2"> Add more</Button>
    </div>
  );
};

export default SingleSubjectInfoForm;
