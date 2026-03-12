import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextVariant = "lead" | "body" | "body-sm" | "caption" | "muted";

interface TextProps {
  as?: "p" | "span" | "div" | "small";
  variant?: TextVariant;
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<TextVariant, string> = {
  lead: "text-lg text-neutral-700 sm:text-xl",
  body: "text-base text-neutral-700",
  "body-sm": "text-sm text-neutral-700",
  caption: "text-xs text-neutral-500",
  muted: "text-sm text-neutral-500"
};

export function Text({ as = "p", variant = "body", className, children }: TextProps) {
  const Component = as as ElementType;

  return <Component className={cn(variantStyles[variant], className)}>{children}</Component>;
}
