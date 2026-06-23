import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h1
      className={cn(
        "font-bold will-change-transform",
        bricolageGrotesque.className,
        className,
      )}
    >
      {children}
    </h1>
  );
}
