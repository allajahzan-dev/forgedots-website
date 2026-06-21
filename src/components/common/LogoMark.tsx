"use client";
type Props = { size?: number; color?: string };

export default function LogoMark({ size = 28, color = "#6d5adc" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="8" y1="28" x2="18" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="20" x2="26" y2="24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="24" x2="32" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="28" r="3.2" fill={color} />
      <circle cx="18" cy="20" r="3.2" fill={color} />
      <circle cx="26" cy="24" r="3.2" fill={color} />
      <circle cx="32" cy="12" r="3.6" fill={color} />
    </svg>
  );
}

