import { CompanyTestimonials } from "@/components/company-testimonials-section";
import { ContactUs } from "@/components/contact-us-section";
import { Hero } from "@/components/hero-section";
import { Services } from "@/components/services-section";
// import { Testimonials } from "@/components/tesimonials-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CompanyTestimonials />
      {/* <Testimonials /> */}
      <ContactUs />
    </main>
  );
}
