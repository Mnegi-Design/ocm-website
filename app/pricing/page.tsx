import { CtaStrip } from "@/components/sections/cta-strip";
import { PageIntro } from "@/components/sections/page-intro";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pricing",
  description: "View transparent and affordable pricing plans for online consultation services.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <PageIntro
        title="Pricing"
        description="Explore clear, affordable plans designed for individual and family healthcare consultations."
      />
      <PricingPlans />
      <CtaStrip />
    </>
  );
}
