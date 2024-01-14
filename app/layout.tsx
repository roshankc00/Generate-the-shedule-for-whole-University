"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignInUrl="/dashboard/routine">
      <html lang="en">
        <body className={inter.className}>
          <NextNProgress />
          <Toaster position="top-center" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
