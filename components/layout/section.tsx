import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  withContainer?: boolean;
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  withContainer = true,
  id
}: SectionProps) {
  return (
    <section id={id} className={cn("py-12 sm:py-16", className)}>
      {withContainer ? <Container className={containerClassName}>{children}</Container> : children}
    </section>
  );
}
