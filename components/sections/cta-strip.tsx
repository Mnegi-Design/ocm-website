import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface CtaStripProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  minimal?: boolean;
}

export function CtaStrip({
  title = "Need medical advice today?",
  description = "Connect with a doctor now and receive personalized treatment guidance from your home.",
  ctaLabel = "Book Now",
  ctaHref = "/telemedicine",
  minimal = false
}: CtaStripProps) {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        {minimal ? (
          <div className="flex justify-center">
            <ButtonLink href={ctaHref} variant="primary" size="lg">
              {ctaLabel}
            </ButtonLink>
          </div>
        ) : (
          <div className="rounded-xl bg-secondary px-6 py-8 text-white sm:px-10 sm:py-10">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">{description}</p>
            <ButtonLink href={ctaHref} variant="primary" className="mt-6">
              {ctaLabel}
            </ButtonLink>
          </div>
        )}
      </Container>
    </section>
  );
}
