import Link from "next/link";
import { Container } from "@/components/ui/container";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M13.5 22V12.9H16.5L17 9.4H13.5V7.2C13.5 6.2 13.8 5.5 15.3 5.5H17.1V2.4C16.8 2.3 15.8 2.2 14.7 2.2C12.3 2.2 10.7 3.7 10.7 6.4V9.4H8V12.9H10.7V22H13.5Z" />
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    )
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M18.9 3H21L14 11L22.2 21H15.7L10.6 14.8L5.2 21H3L10.6 12.3L2.8 3H9.5L14.1 8.7L18.9 3Z" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M6.5 8.6H3.4V20H6.5V8.6ZM4.9 7.1C5.9 7.1 6.7 6.3 6.7 5.3C6.7 4.3 5.9 3.5 4.9 3.5C3.9 3.5 3.1 4.3 3.1 5.3C3.1 6.3 3.9 7.1 4.9 7.1ZM20.9 20H17.8V14.2C17.8 12.8 17.8 11 16 11C14.2 11 14 12.4 14 14.1V20H10.9V8.6H13.9V10.2H14C14.4 9.4 15.4 8.5 16.9 8.5C20 8.5 20.9 10.5 20.9 13.2V20Z" />
      </svg>
    )
  }
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Company
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>
              <Link href="/about" className="hover:text-neutral-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/patients" className="hover:text-neutral-900">
                Patients
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Product
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>
              <Link href="/telemedicine" className="hover:text-neutral-900">
                Telemedicine
              </Link>
            </li>
            <li>
              <Link href="/partnership" className="hover:text-neutral-900">
                Partnership
              </Link>
            </li>
            <li>
              <Link href="/insurance" className="hover:text-neutral-900">
                Insurance
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>
              <Link href="/privacy-policy" className="hover:text-neutral-900">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-neutral-900">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-neutral-900">
                Refund policy
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Follow us
          </h2>
          <p className="mt-3 text-sm text-neutral-700">
            Connect with Online Chikitsa Mitra on social platforms.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </section>
      </Container>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">
        Copyright {new Date().getFullYear()} Online Chikitsa Mitra. All rights reserved.
      </div>
    </footer>
  );
}
