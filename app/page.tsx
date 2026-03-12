import { createPageMetadata } from "@/lib/seo";
import { HomeBenefits } from "@/components/sections/home-benefits";
import { HomeDoctorCredibility } from "@/components/sections/home-doctor-credibility";
import { HomeDownloadAppCta } from "@/components/sections/home-download-app-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeHowItWorks } from "@/components/sections/home-how-it-works";
import { HomeMedicalStoreNetwork } from "@/components/sections/home-medical-store-network";
import { HomePricingPreview } from "@/components/sections/home-pricing-preview";
import { HomeTrustIndicators } from "@/components/sections/home-trust-indicators";

export const metadata = createPageMetadata({
  title: "Online Chikitsa Mitra | Qualified Doctor Consultation",
  description:
    "Consult qualified doctors through secure video consultations from home or nearby medical stores. Affordable digital healthcare access across India.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustIndicators />
      <HomeHowItWorks />
      <HomeBenefits />
      <HomeDoctorCredibility />
      <HomePricingPreview />
      <HomeMedicalStoreNetwork />
      <HomeDownloadAppCta />
    </>
  );
}
