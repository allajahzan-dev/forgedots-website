import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";

import { dmSans } from "@/fonts";

import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/animated/CustomCursor";
import ClientOnly from "@/components/layout/ClientOnly";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(dmSans.className, "antialiased overflow-x-hidden")}
        suppressHydrationWarning
      >
        <ClientOnly>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
