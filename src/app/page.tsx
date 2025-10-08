import NavigationHeader from "@/components/sections/navigation-header";
import HeroSection from "@/components/sections/hero-section";
import JobListingsCarousel from "@/components/sections/job-listings-carousel";
import TestimonialsSection from "@/components/sections/testimonials-section";
import AiFeaturesSection from "@/components/sections/ai-features-section";
import IndustryLeadersSection from "@/components/sections/industry-leaders-section";
import FaqSection from "@/components/sections/faq-section";
import JobSearchWidget from "@/components/sections/job-search-widget";
import FinalCtaSection from "@/components/sections/final-cta-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <NavigationHeader />
      <HeroSection />
      <JobListingsCarousel />
      <TestimonialsSection />
      <AiFeaturesSection />
      <IndustryLeadersSection />
      <FaqSection />
      <JobSearchWidget />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}