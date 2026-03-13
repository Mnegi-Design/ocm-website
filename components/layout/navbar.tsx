"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/telemedicine", label: "Telemedicine" },
  { href: "/patients", label: "Patients" },
  { href: "/partnership", label: "Partnership" },
  { href: "/insurance", label: "Insurance" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-3">
          <Link href="/" className="flex items-center" aria-label="Online Chikitsa Mitra home">
            <span className="inline-flex p-4">
              <Image
                src="/logo.svg"
                alt="Online Chikitsa Mitra logo"
                width={180}
                height={52}
                priority
              />
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-neutral-900 underline decoration-primary decoration-2 underline-offset-8"
                    : "text-neutral-700 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href={siteConfig.phoneHref}
              variant="secondary"
              size="lg"
              className="hidden bg-[#F6C358] text-black hover:bg-[#e4b648] sm:inline-flex"
            >
              Call Now
            </ButtonLink>
            <label className="relative hidden sm:block">
              <span className="sr-only">Select language</span>
                <select
                  aria-label="Select language"
                  defaultValue="en"
                className="min-h-[46px] appearance-none rounded-lg border border-neutral-200 bg-white px-4 py-2 pr-10 text-sm font-medium text-neutral-700 shadow-sm transition hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-neutral-500">
                <svg
                  viewBox="0 0 20 20"
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </label>
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
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/20 text-neutral-900"
                      : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink
                href={siteConfig.phoneHref}
                variant="secondary"
                className="mt-1 w-full bg-[#F6C358] text-black hover:bg-[#e4b648]"
                onClick={() => setIsMenuOpen(false)}
              >
                Call Now
              </ButtonLink>
              <label className="relative mt-1 block">
                <span className="sr-only">Select language</span>
                <select
                  aria-label="Select language"
                  defaultValue="en"
                  className="min-h-11 w-full appearance-none rounded-lg border border-neutral-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-neutral-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  onChange={() => setIsMenuOpen(false)}
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-neutral-500">
                  <svg
                    viewBox="0 0 20 20"
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </label>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
