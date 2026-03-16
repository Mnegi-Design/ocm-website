"use client";

import { useState } from "react";
import { Card, Heading, Text } from "@/components/ui";

const quotes = [
  "Telemedicine enables us to reach patients who may otherwise delay treatment due to distance or cost.",
  "Digital healthcare allows earlier intervention in chronic diseases, improving long-term outcomes.",
  "Doctor-led telemedicine ensures that digital access is backed by clinical expertise."
];

export function TelemedicineDoctorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousQuote = () => {
    setActiveIndex((current) => (current === 0 ? quotes.length - 1 : current - 1));
  };

  const nextQuote = () => {
    setActiveIndex((current) => (current === quotes.length - 1 ? 0 : current + 1));
  };

  return (
    <Card className="border-secondary/20 bg-secondary/[0.06]">
      <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
        Doctor Voices
      </Text>
      <Heading as="h3" size="h4" className="mt-3">
        What doctors say about telemedicine
      </Heading>
      <Text variant="body" className="mt-5 max-w-2xl text-neutral-900">
        “{quotes[activeIndex]}”
      </Text>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {quotes.map((quote, index) => (
            <button
              key={quote}
              type="button"
              aria-label={`Show doctor quote ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index ? "w-8 bg-secondary" : "w-2.5 bg-secondary/30"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition hover:border-secondary/30 hover:text-secondary"
            aria-label="Previous doctor quote"
            onClick={previousQuote}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M14.5 6.5L9 12L14.5 17.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition hover:border-secondary/30 hover:text-secondary"
            aria-label="Next doctor quote"
            onClick={nextQuote}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M9.5 6.5L15 12L9.5 17.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
}
