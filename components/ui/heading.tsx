import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  as?: HeadingLevel;
  size?: HeadingSize;
  className?: string;
  children: ReactNode;
}

const sizeStyles: Record<HeadingSize, string> = {
  display: "text-5xl font-bold tracking-tight sm:text-6xl",
  h1: "text-4xl font-bold tracking-tight sm:text-5xl",
  h2: "text-3xl font-bold tracking-tight sm:text-4xl",
  h3: "text-2xl font-semibold tracking-tight sm:text-3xl",
  h4: "text-xl font-semibold tracking-tight sm:text-2xl",
  h5: "text-lg font-semibold tracking-tight",
  h6: "text-base font-semibold tracking-tight"
};

export function Heading({ as = "h2", size, className, children }: HeadingProps) {
  const Component = as as ElementType;
  const resolvedSize = size ?? as;

  return (
    <Component className={cn("text-neutral-900", sizeStyles[resolvedSize], className)}>
      {children}
    </Component>
  );
}
