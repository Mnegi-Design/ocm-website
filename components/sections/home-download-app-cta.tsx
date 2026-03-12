import Image from "next/image";

import { Heading, Section, Text } from "@/components/ui";

export function HomeDownloadAppCta() {
  return (
    <Section>
      <div className="rounded-xl bg-secondary px-6 py-8 text-white sm:px-8 sm:py-10">
        <div>
          <Heading as="h2" size="h3" className="text-white">
            Download the app for faster care access
          </Heading>
          <Text variant="body" className="mt-3 max-w-xl text-white/90">
            Book appointments, access prescriptions, and track follow-ups from one place on your
            phone.
          </Text>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              aria-label="Download on Android"
              className="inline-flex rounded-lg border border-white/20 bg-white/10 p-2 transition hover:bg-white/20"
            >
              <Image
                src="/assets/images/android-icon.png"
                alt="Android download"
                width={128}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <a
              href="#"
              aria-label="Download on iOS"
              className="inline-flex rounded-lg border border-white/20 bg-white/10 p-2 transition hover:bg-white/20"
            >
              <Image
                src="/assets/images/ios-icon.png"
                alt="iOS download"
                width={128}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
