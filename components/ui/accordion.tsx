"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
  defaultOpenId?: string;
}

export function Accordion({ items, className, defaultOpenId }: AccordionProps) {
  const fallbackOpenId = defaultOpenId ?? items[0]?.id;
  const [openId, setOpenId] = useState<string | null>(fallbackOpenId ?? null);
  const groupId = useId();

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `${groupId}-${item.id}-button`;
        const panelId = `${groupId}-${item.id}-panel`;

        return (
          <article key={item.id} className="surface overflow-hidden">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-neutral-900"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    "inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-base leading-none text-neutral-700 transition-transform",
                    isOpen && "rotate-45"
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm text-neutral-700">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
