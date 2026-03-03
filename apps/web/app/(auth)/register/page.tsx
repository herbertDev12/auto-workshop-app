"use client";

import Link from "next/link";
import { BarChart3 } from "lucide-react";
import RHFInput from "@repo/ui/components/rhf-fields/rhf-input";
import RHFInputPassword from "@repo/ui/components/rhf-fields/rhf-input-password";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .min(2, "Name must be at least 2 characters.")
    .max(32, "Name must be at most 32 characters."),
  lastName: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces")
    .min(2, "Last name must be at least 2 characters.")
    .max(32, "Last name must be at most 32 characters."),
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
});

export default function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      age: 1,
      email: "",
      password: "",
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted">
      <Link
        href="/"
        className="absolute left-8 top-8 flex items-center gap-2 font-bold text-xl"
      >
        <BarChart3 className="h-6 w-6" />
        <span>ProjectPro</span>
      </Link>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Crear una cuenta</CardTitle>
          <CardDescription>
            Ingresa tus datos para registrarte en la plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form action="/dashboard">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <RHFInput
                      name="name"
                      label="Name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <RHFInput
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <RHFInput
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <RHFInput
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <RHFInput
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Crear cuenta
                </Button>
              </div>
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-center text-sm text-muted-foreground mt-2">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/login"
              className="text-primary underline-offset-4 hover:underline"
            >
              Iniciar sesión
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
