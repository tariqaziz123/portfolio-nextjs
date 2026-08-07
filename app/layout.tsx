import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/Theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Tariq Aziz | Frontend Engineer",
  description:
    "Frontend Engineer specializing in React.js, Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}