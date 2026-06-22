import Link from "next/link";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";
import LogoMark from "@/components/common/LogoMark";

interface AppLogoProps {
  className?: string;
  iconColor?: string;
  iconSize?: number;
}

export default function AppLogo({
  className,
  iconColor,
  iconSize = 28,
}: AppLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 font-bold tracking-tight uppercase",
        bricolageGrotesque.className,
        className,
      )}
    >
      <LogoMark size={iconSize} color={iconColor} />
      FORGEDOTS
    </Link>
  );
}
