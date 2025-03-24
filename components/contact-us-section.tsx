"use client";

import { Mail } from "lucide-react";
import { SplineScene } from "@/components/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/spotlight";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactUs() {
  return (
    <div id="contact" className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden mt-12">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 bg-white" />

        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Connect With Us!
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              Have questions or need assistance? Connect with us for expert
              support and seamless solutions. We&apos;re here to help — reach
              out today!
            </p>
            <Button
              asChild
              className="w-fit mt-4 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer"
            >
              <Link href="#footer">Contact Us <Mail /></Link>
            </Button>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
