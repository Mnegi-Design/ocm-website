import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaStrip() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="rounded-xl bg-secondary px-6 py-8 text-white sm:px-10 sm:py-10">
          <h2 className="text-2xl font-bold">Need medical advice today?</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
            Connect with a doctor now and receive personalized treatment guidance from your home.
          </p>
          <ButtonLink href="/telemedicine" variant="primary" className="mt-6">
            Book Now
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
