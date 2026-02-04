// import { CompanyTestimonials } from '@/components/company-testimonials-section'
import { ContactUs } from '@/components/contact-us-section'
import { Hero } from '@/components/hero-section'
import { ProjectShowcase } from '@/components/project-showcase'
import { Services } from '@/components/services-section'
// import { Testimonials } from "@/components/tesimonials-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ProjectShowcase />
      {/* <CompanyTestimonials /> */}
      {/* <Testimonials /> */}
      <ContactUs />
    </main>
  )
}
