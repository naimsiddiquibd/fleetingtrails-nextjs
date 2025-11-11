import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CompanyLogosSection } from "@/components/company-logos-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialSection />
        <CompanyLogosSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  )
}
