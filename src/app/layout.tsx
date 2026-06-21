import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";

import { dmSans } from "@/fonts";

import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/animated/CustomCursor";
import ClientOnly from "@/components/layout/ClientOnly";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

// Metadata
export const metadata: Metadata = {
  title: "ForgeDots Technologies",
  description: "End-to-end data and AI built for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body
        className={cn(dmSans.className, "antialiased overflow-x-hidden")}
        suppressHydrationWarning
      >
        <ClientOnly>
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
        </ClientOnly>
      </body>
    </html>
  );
}
