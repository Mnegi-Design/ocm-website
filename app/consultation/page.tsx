import { ConsultationOverview } from "@/components/sections/consultation-overview";
import { CtaStrip } from "@/components/sections/cta-strip";
import { PageIntro } from "@/components/sections/page-intro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Consultation",
  description:
    "Explore consultation options and book online medical appointments with Online Chikitsa Mitra.",
  path: "/consultation"
});

export default function ConsultationPage() {
  return (
    <>
      <PageIntro
        title="Consultation"
        description="Choose the right consultation format and connect with verified doctors for timely care."
      />
      <ConsultationOverview />
      <CtaStrip />
    </>
  );
}
