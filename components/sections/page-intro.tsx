import Image from "next/image";
import { Heading, Section, Text } from "@/components/ui";

interface PageIntroProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function PageIntro({ title, description, imageSrc, imageAlt }: PageIntroProps) {
  return (
    <Section className="bg-white" containerClassName="py-2">
      <header className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <Heading as="h1" size="h2">
            {title}
          </Heading>
          <Text variant="lead" className="mt-3 max-w-3xl">
            {description}
          </Text>
        </div>
        {imageSrc ? (
          <div className="relative overflow-hidden rounded-xl border border-neutral-200">
            <Image
              src={imageSrc}
              alt={imageAlt ?? `${title} hero image`}
              width={1200}
              height={720}
              className="h-56 w-full object-cover sm:h-64 lg:h-72"
              priority
            />
          </div>
        ) : null}
      </header>
    </Section>
  );
}
