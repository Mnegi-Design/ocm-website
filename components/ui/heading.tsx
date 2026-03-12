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
  display: "text-5xl font-bold tracking-tight sm:text-6xl 3xl:text-7xl 4xl:text-8xl",
  h1: "text-4xl font-bold tracking-tight sm:text-5xl 3xl:text-6xl 4xl:text-7xl",
  h2: "text-3xl font-bold tracking-tight sm:text-4xl 3xl:text-5xl 4xl:text-6xl",
  h3: "text-2xl font-semibold tracking-tight sm:text-3xl 3xl:text-4xl 4xl:text-5xl",
  h4: "text-xl font-semibold tracking-tight sm:text-2xl 3xl:text-3xl 4xl:text-4xl",
  h5: "text-lg font-semibold tracking-tight 3xl:text-2xl",
  h6: "text-base font-semibold tracking-tight 3xl:text-xl"
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
