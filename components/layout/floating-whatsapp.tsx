import Link from "next/link";
import { siteConfig } from "@/constants/site";

export function FloatingWhatsapp() {
  return (
    <Link
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Connect with the team on WhatsApp"
      className="fixed bottom-6 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-card transition-transform hover:scale-105 hover:bg-[#1c9640] focus-visible:outline-none sm:bottom-8 sm:right-6"
    >
      <svg
        viewBox="0 0 48 48"
        className="h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M30.6673 30.0001C28.3473 32.3201 23.0019 30.3427 20.3299 27.6707C17.6579 24.9987 15.6806 19.6534 18.0006 17.3334C18.6726 16.6614 19.5979 16.5814 20.1633 16.6081C20.4899 16.6227 20.7726 16.8147 20.9633 17.0814L22.2326 18.8601C22.4159 19.1169 22.5021 19.4304 22.476 19.7449C22.4499 20.0593 22.3131 20.3543 22.09 20.5774L20.8886 21.7787C21.11 22.4454 21.822 24.0454 22.8886 25.1121C23.9553 26.1787 25.5553 26.8907 26.222 27.1121L27.4233 25.9121C27.6462 25.6887 27.9411 25.5517 28.2556 25.5253C28.57 25.499 28.8836 25.585 29.1406 25.7681L30.9193 27.0374C31.1859 27.2281 31.378 27.5107 31.3926 27.8374C31.4193 28.4027 31.3393 29.3281 30.6673 30.0001Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 26.5493 10.6813 28.9413 11.8733 31L10.7 37.3L17 36.1267C19.1273 37.3576 21.5423 38.0039 24 38Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
