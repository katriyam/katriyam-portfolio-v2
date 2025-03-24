import React from "react";

import { GradientHeading } from "@/components/gradient-heading";
import { LogoCarousel } from "@/components/logo-carousel";

export function CompanyTestimonials() {
  return (
    <div id="testimonials" className="space-y-8  py-24">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading variant="secondary">
            The best are already here
          </GradientHeading>
          <GradientHeading size="xxl">Join Katriyam</GradientHeading>
        </div>

        <LogoCarousel columnCount={3} />
      </div>
    </div>
  );
}
