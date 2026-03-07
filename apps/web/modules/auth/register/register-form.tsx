"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { BarChart3 } from "lucide-react";
import RHFInput from "@repo/ui/components/rhf-fields/rhf-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { IRegisterInputDto } from "@repo/schemas/auth/auth";
import { registerInputSchema } from "@repo/schemas/auth/auth";

const RegisterForm: React.FC = () => {
  const form = useForm<IRegisterInputDto>({
    resolver: zodResolver(registerInputSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: IRegisterInputDto) {
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
                      label="Nombre"
                      placeholder="Ingresa tu nombre"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <RHFInput
                      name="lastName"
                      label="Apellido"
                      placeholder="Ingresa tu apellido"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <RHFInput
                    name="email"
                    label="Correo electrónico"
                    placeholder="nombre@ejemplo.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <RHFInput
                    name="password"
                    label="Contraseña"
                    type="password"
                    placeholder="Crea una contraseña"
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
        <div className="mx-7 -mt-6">
          <div className="flex items-center gap-4 my-4">
            <div className="h-px flex-1 bg-slate-800" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              O regístrate con
            </span>
            <div className="h-px flex-1 bg-slate-800" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-3 py-3"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-sm font-semibold">Google</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-3 py-3"
            >
              <Github size={20} />
              <span className="text-sm font-semibold">GitHub</span>
            </Button>
          </div>
        </div>

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
};

export default RegisterForm;
