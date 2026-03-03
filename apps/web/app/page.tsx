import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckSquare,
  Clock,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BarChart3 className="h-6 w-6" />
            <span>ProjectPro</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Inicio
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Proyectos
            </Link>
            <Link
              href="/tasks"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Tareas
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Equipo
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Recursos
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Registrarse</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Sistema de Gestión de Proyectos Empresariales
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Planifica, ejecuta y monitorea tus proyectos de manera
                  eficiente. Facilita la colaboración entre los miembros del
                  equipo, asigna tareas y gestiona recursos.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg">
                      Comenzar ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button variant="outline" size="lg">
                      Ver demostración
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl bg-background p-4 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="relative z-10 h-full rounded-lg border bg-background p-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="text-sm font-medium">
                        Dashboard de Proyectos
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                      </div>
                    </div>
                    <div className="mt-4 grid gap-2">
                      <div className="h-2 w-3/4 rounded bg-muted" />
                      <div className="h-2 w-1/2 rounded bg-muted" />
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <div className="h-20 rounded bg-muted" />
                        <div className="h-20 rounded bg-muted" />
                      </div>
                      <div className="mt-2 h-32 rounded bg-muted" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Características Principales
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestro sistema ofrece todas las herramientas necesarias para
                  gestionar proyectos de manera eficiente
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <CheckSquare className="h-6 w-6 text-primary" />
                  <CardTitle>Gestión de Tareas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Crea, asigna y monitorea tareas. Establece prioridades y
                    fechas límite para mantener tu proyecto en marcha.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>Colaboración en Equipo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Facilita la comunicación y colaboración entre los miembros
                    del equipo con herramientas integradas.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  <CardTitle>Planificación</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Crea cronogramas detallados, establece hitos y visualiza la
                    línea de tiempo del proyecto.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <CardTitle>Métricas y Reportes</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Analiza el rendimiento del proyecto con métricas de
                    funcionalidad y usabilidad en tiempo real.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  <CardTitle>Seguimiento de Tiempo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Registra el tiempo dedicado a cada tarea y proyecto para una
                    mejor gestión de recursos.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <ArrowRight className="h-6 w-6 text-primary" />
                  <CardTitle>Flujos de Trabajo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Define procesos personalizados basados en componentes y
                    metodologías ágiles como RUP.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 ProjectPro. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:underline"
            >
              Términos
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacidad
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:underline"
            >
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
