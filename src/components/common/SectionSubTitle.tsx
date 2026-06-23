import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionSubTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SectionSubTitle({
  children,
  className,
}: SectionSubTitleProps) {
  return (
    <p className={cn("max-w-lg text-base will-change-transform", className)}>
      {children}
    </p>
  );
}
