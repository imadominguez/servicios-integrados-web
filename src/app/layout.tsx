import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { font } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-dvh bg-background font-sans antialiased",
          font.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
