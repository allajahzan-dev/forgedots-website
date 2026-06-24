import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  label: string;
  id: string;
  className?: string;
}

interface InputProps
  extends
    BaseProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className"> {
  textarea?: false;
}

interface TextAreaProps
  extends
    BaseProps,
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "className"> {
  textarea: true;
}

type AppInputFieldProps = InputProps | TextAreaProps;

export default function AppInputField({
  label,
  id,
  className,
  textarea,
  ...props
}: AppInputFieldProps) {
  const baseClasses =
    "w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium outline-none transition-all focus:border-[#0c1029] focus:ring-3 focus:ring-[#0c1029]/10";

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          className={cn(baseClasses, "resize-y", className)}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={cn(baseClasses, className, "h-10")}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}
