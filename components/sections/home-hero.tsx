import Image from "next/image";
import { ButtonLink, Heading, Section, Text } from "@/components/ui";

const heroHighlights = [
  "Consultation starts at ₹50*",
  "₹50 discount on first consultation above ₹100*",
  "Video consultation with doctor (9 AM – 10 PM)",
  "Digital prescription",
  "Available on App Store & Google Play"
];

export function HomeHero() {
  return (
    <Section
      className="bg-white pt-12 sm:pt-16 lg:pt-20"
      containerClassName="grid gap-8 lg:grid-cols-2 lg:items-center"
    >
      <header>
        <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
          Secure Online Consultation
        </Text>
        <Heading as="h1" size="h1" className="mt-3">
          Consult Qualified Doctors through Secure Video Calls
        </Heading>
        <Text variant="lead" className="mt-4 max-w-2xl">
          Connect with qualified doctors from AIIMS and leading medical colleges across India.
        </Text>

        <ul className="mt-6 space-y-3 text-sm text-neutral-700">
          {heroHighlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary/15 text-secondary"
                aria-hidden="true"
              >
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                  <path
                    d="M5 10.2L8.2 13.4L15 6.6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <ButtonLink href="/telemedicine" variant="primary" size="lg">
            E-Clinic Near me
          </ButtonLink>
          <ButtonLink
            href="#"
            variant="ghost"
            size="lg"
            className="border border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary"
          >
            Download the App
          </ButtonLink>
        </div>
      </header>

      <div className="relative mx-auto w-full max-w-xl">
        <div className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-full bg-primary/30 blur-2xl lg:block" />
        <div className="absolute -bottom-6 -right-4 hidden h-32 w-32 rounded-full bg-secondary/20 blur-2xl lg:block" />
        <div className="relative overflow-hidden rounded-[28px] shadow-card">
          <Image
            src="/hero-image.jpg"
            alt="Indian medical store staff assisting a patient for telemedicine consultation"
            width={1200}
            height={800}
            className="h-[420px] w-full object-cover"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
