import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export function Container({ children, className, as = "div" }: ContainerProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 2xl:max-w-[96rem] 2xl:px-10 3xl:max-w-[120rem] 3xl:px-14 4xl:max-w-[140rem] 4xl:px-20",
        className
      )}
    >
      {children}
    </Component>
  );
}
