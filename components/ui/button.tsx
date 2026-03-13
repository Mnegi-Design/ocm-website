import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: Size;
}

interface ButtonLinkProps extends Omit<ComponentPropsWithoutRef<typeof Link>, "className"> {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<Variant, string> = {
  primary: "bg-[#FF5F51] text-white hover:bg-[#e45245]",
  secondary: "bg-secondary text-white hover:bg-[#1c9640]",
  ghost: "bg-transparent text-neutral-700 hover:bg-neutral-200"
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-sm",
  lg: "px-6 py-3 text-base"
};

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  );
}
