import Link from "next/link";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AppButtonProps extends Omit<
  HTMLMotionProps<"button">,
  "ref" | "children"
> {
  href?: string;
  variant?: "primary" | "outline";
  children?: React.ReactNode;
}

export default function AppButton({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: AppButtonProps) {
  const baseStyles =
    "h-10 px-4 inline-flex w-fit items-center justify-center gap-2 text-sm font-medium transition-colors focus:outline-none rounded-lg";

  const variants = {
    primary: "bg-[#0c1029] text-white hover:bg-black/90",
    outline:
      "border border-zinc-200 bg-transparent text-black hover:bg-muted h-10",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button whileTap={{ scale: 0.99 }} className={classes} {...props}>
      {children}
    </motion.button>
  );
}
