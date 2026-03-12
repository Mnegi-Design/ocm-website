import { ButtonLink, Heading, Section, Text } from "@/components/ui";

export function HomeDownloadAppCta() {
  return (
    <Section>
      <div className="rounded-xl bg-secondary px-6 py-10 text-white sm:px-10 sm:py-12">
        <Heading as="h2" size="h3" className="text-white">
          Download the app for faster care access
        </Heading>
        <Text variant="body" className="mt-3 max-w-2xl text-white/90">
          Book appointments, access prescriptions, and track follow-ups from one place on your
          phone.
        </Text>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="#" variant="primary" size="lg">
            Download App
          </ButtonLink>
          <ButtonLink
            href="/consultation"
            variant="ghost"
            size="lg"
            className="bg-white/10 text-white hover:bg-white/20"
          >
            Book Consultation
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
