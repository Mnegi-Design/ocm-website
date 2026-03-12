import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardPadding = "none" | "sm" | "md" | "lg";

interface CardProps extends ComponentPropsWithoutRef<"article"> {
  padding?: CardPadding;
}

const paddingStyles: Record<CardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
};

export function Card({ className, padding = "md", ...props }: CardProps) {
  return <article className={cn("surface", paddingStyles[padding], className)} {...props} />;
}
