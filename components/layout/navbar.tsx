"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/consultation", label: "Consultation" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/doctors", label: "Doctors" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Online Chikitsa Mitra home"
          >
            <Image src="/logo.svg" alt="Online Chikitsa Mitra logo" width={36} height={36} />
            <span className="text-sm font-bold text-neutral-900 sm:text-base">
              Online Chikitsa Mitra
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="#" variant="secondary" size="sm" className="hidden sm:inline-flex">
              Download App
            </ButtonLink>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-100 lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-menu"
            aria-label="Mobile primary"
            className="border-t border-neutral-200 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink
                href="#"
                variant="secondary"
                className="mt-1 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Download App
              </ButtonLink>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
