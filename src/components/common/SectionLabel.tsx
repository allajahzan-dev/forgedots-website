import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className,
  ...props
}: SectionLabelProps) {
  return (
    <p
      className={cn("text-base font-semibold transform-gpu", className)}
      {...props}
    >
      {children}
    </p>
  );
}
