import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className,
}: SectionLabelProps) {
  return (
    <p className={cn("text-base font-semibold transform-gpu", className)}>
      {children}
    </p>
  );
}
