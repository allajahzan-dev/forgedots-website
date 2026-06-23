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
        "relative py-16 md:py-24 lg:py-32 px-5 sm:px-10 md:px-20 lg:px-40 space-y-16 will-change-transform",
        className,
      )}
    >
      {children}
    </section>
  );
}
