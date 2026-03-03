"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Example } from "@sopr/ui/components/blocks/example";
import { Button } from "@sopr/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@sopr/ui/components/card";
import { Field, FieldGroup } from "@sopr/ui/components/field";
import RHFDatePicker from "@sopr/ui/components/form/fields/rhf-date-picker";
import RHFInput from "@sopr/ui/components/form/fields/rhf-input";
import { FormProvider, useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .min(2, "Name must be at least 2 characters.")
    .max(32, "Name must be at most 32 characters."),
  age: z
    .number()
    .int("Age must be an integer.")
    .min(1, "Age must be at least 1.")
    .max(120, "Age must be at most 120."),
  email: z.string().email("Invalid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(64, "Password must be at most 64 characters."),
  date: z.string().min(1, "Date is required"),
});

export default function BasicForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      age: 1,
      email: "",
      password: "",
      date: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <Example title="Form">
      <Toaster />
      <Card className="w-full max-w-md">
        <CardHeader>
          <h3 className="text-lg font-medium">Basic Form</h3>
          <p className="text-sm text-muted-foreground">
            A simple form built with React Hook Form and Zod for validation.
          </p>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form>
              <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
                  <RHFInput
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    required
                  />
                  <RHFInput
                    name="age"
                    label="Age"
                    type="number"
                    placeholder="Enter your age"
                    required
                  />
                </div>
                <RHFInput
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  required
                />
                <RHFInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <RHFDatePicker name="date" label="Date" />
              </FieldGroup>
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button type="button" onClick={form.handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </Example>
  );
}
