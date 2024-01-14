"use client";
import React, { useState } from "react";
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
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
const formSchema = z.object({
  name: z.string().min(4),
  class_ends: z.string().min(1),
  class_starts: z.string().min(1),
  period_intervals: z.number().min(1),
});
const BasicInfoForm = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      class_ends: "",
      class_starts: "",
      period_intervals: 45,
    },
  });
  const { isSubmitting, isValid } = form.formState;
  const submitHandler = async (values: z.infer<typeof formSchema>) => {
    try {
      setisLoading(true);
      const response = await axios.post("/api/basicinfo", values);
      if (response?.data?.success) {
        toast.success(
          response?.data?.message || "Institute created successfully"
        );
        router.push(`/dashboard/routine/${response.data?.data.id}`);
        console.log(response);
      } else {
        toast.error(response?.data?.success || "Something went wrong");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="space-y-4 mt4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Insititute Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="eg: Pulchowk Campus"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="class_starts"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Class Starts</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="eg: 10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="class_ends"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Class Ends</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="eg: 16"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="period_intervals"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Period intervals</FormLabel>
                <FormControl>
                  <Input type="number" disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row-reverse">
            <Button disabled={!isValid} className="w-full">
              {isLoading ? <Loader2 className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BasicInfoForm;
