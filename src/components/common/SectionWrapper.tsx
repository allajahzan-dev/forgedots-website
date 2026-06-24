import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "relative py-12 md:py-16 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 space-y-10 will-change-transform",
        className,
      )}
    >
      {children}
    </section>
  );
}
