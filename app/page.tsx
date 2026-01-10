import { HeroSection } from "@/components/sections/hero-section"
import { TrustSection } from "@/components/sections/trust-section"
import { AboutSection } from "@/components/sections/about-section"
import { DifferentialsSection } from "@/components/sections/differentials-section"
import { ServicesSection } from "@/components/sections/services-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { ProfessionalsSection } from "@/components/sections/professionals-section"
import { BeforeAfterSection } from "@/components/sections/before-after-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { BlogSection } from "@/components/sections/blog-section"
import { CTAFinalSection } from "@/components/sections/cta-final-section"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <DifferentialsSection />
      <ServicesSection />
      <HowItWorksSection />
      <ProfessionalsSection />
      <BeforeAfterSection />
      <ReviewsSection />
      <GallerySection />
      <BlogSection />
      <CTAFinalSection />
      <Footer />
    </main>
  )
}
