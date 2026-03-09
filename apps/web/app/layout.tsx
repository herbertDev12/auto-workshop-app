import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { DataProvider } from "@/contexts/DataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProjectPro",
  description: "Sistema de Gestión de Proyectos Empresariales",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <DataProvider>{children}</DataProvider>
        </Providers>
      </body>
    </html>
  );
}
