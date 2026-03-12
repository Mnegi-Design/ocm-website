import { ReactNode } from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({ title, subtitle, action, className = "" }: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div>
        <Heading as="h2" size="h3">
          {title}
        </Heading>
        {subtitle ? (
          <Text variant="muted" className="mt-2 max-w-2xl sm:text-base">
            {subtitle}
          </Text>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </header>
  );
}
