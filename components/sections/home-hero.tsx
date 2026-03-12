import Image from "next/image";
import { ButtonLink, Heading, Section, Text } from "@/components/ui";

export function HomeHero() {
  return (
    <Section
      className="bg-white pt-12 sm:pt-16 lg:pt-20"
      containerClassName="grid gap-8 lg:grid-cols-2 lg:items-center"
    >
      <header>
        <Text
          as="span"
          variant="caption"
          className="inline-flex rounded-full bg-primary/20 px-3 py-1 font-semibold uppercase tracking-wide text-neutral-700"
        >
          Telemedicine Care
        </Text>
        <Heading as="h1" size="h1" className="mt-4 font-semibold">
          Online Doctor Consultation in India{" "}
          <span className="font-medium text-neutral-500">- Trusted, Affordable and Accessible</span>
        </Heading>
        <Text variant="lead" className="mt-4 max-w-2xl">
          Consult doctor online through secure video consultation on the Online Chikitsa Mitra app.
          Connect with qualified doctors from AIIMS and leading medical colleges across India.
        </Text>
        <ul className="mt-4 space-y-2 text-sm text-neutral-700">
          <li>Consultation starts at Rs. 50</li>
          <li>Rs. 50 discount on first consultation above Rs. 100</li>
          <li>Video doctor consultation available 9 AM to 10 PM</li>
          <li>Digital prescription after consultation</li>
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ButtonLink href="/consultation" variant="primary" size="lg">
            Start Consultation
          </ButtonLink>
          <ButtonLink href="#" variant="ghost" size="lg">
            Download App
          </ButtonLink>
        </div>
      </header>
      <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl shadow-card">
        <Image
          src="https://images.pexels.com/photos/14797864/pexels-photo-14797864.jpeg?cs=srgb&dl=pexels-dr-bintang-lolong-4941180-14797864.jpg&fm=jpg"
          alt="Indian medical store staff assisting a patient for telemedicine consultation"
          width={1200}
          height={800}
          className="h-[420px] w-full object-cover"
          priority
        />
      </div>
    </Section>
  );
}
