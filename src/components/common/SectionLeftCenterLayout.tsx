import { ReactNode } from "react";

interface SectionLeftCenterLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function SectionLeftCenterLayout({
  leftContent,
  rightContent,
}: SectionLeftCenterLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-6 md:gap-0 transform-gpu">
      <div className="md:col-span-1">{leftContent}</div>
      <div className="md:col-span-2 space-y-5">{rightContent}</div>
    </div>
  );
}
