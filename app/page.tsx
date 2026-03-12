import { createPageMetadata } from "@/lib/seo";
import { HomeBenefits } from "@/components/sections/home-benefits";
import { HomeDoctorCredibility } from "@/components/sections/home-doctor-credibility";
import { HomeDownloadAppCta } from "@/components/sections/home-download-app-cta";
import { HomeFaq } from "@/components/sections/home-faq";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeHowItWorks } from "@/components/sections/home-how-it-works";
import { HomeMedicalStoreNetwork } from "@/components/sections/home-medical-store-network";
import { HomePricingPreview } from "@/components/sections/home-pricing-preview";
import { HomeTrustIndicators } from "@/components/sections/home-trust-indicators";

export const metadata = createPageMetadata({
  title: "Online Doctor Consultation in India | Rs. 50 Video Consult",
  description:
    "Consult doctor online from 9 AM to 10 PM with verified doctors from AIIMS and medical colleges. Get Rs. 50 discount on your first consultation. Download Online Chikitsa Mitra app.",
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
      <HomeFaq />
    </>
  );
}
