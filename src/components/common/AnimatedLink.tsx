import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps extends React.ComponentPropsWithoutRef<
  typeof Link
> {
  text: string;
  icon?: React.ReactNode;
}

export default function AnimatedLink({
  text,
  icon = <ArrowUpRight size={16} />,
  className,
  ...props
}: AnimatedLinkProps) {
  return (
    <Link
      className={cn(
        "group relative inline-flex font-semibold tracking-tight overflow-hidden",
        className,
      )}
      {...props}
    >
      <span className="flex items-center gap-2 group-hover:-translate-y-full transition-transform duration-300">
        {icon} {text}
      </span>
      <span className="absolute inset-0 flex items-center gap-2 text-indigo-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        {icon} {text}
      </span>
    </Link>
  );
}
