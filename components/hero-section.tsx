import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
import { HeroPill } from "@/components/hero-pill";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="h-screen">
      <div className="flex items-center gap-2 container mx-auto px-4 py-4 md:px-6 lg:px-8">
        <Image
          src="/logo.png"
          alt="katriyam logo"
          width={120}
          height={120}
          className="size-12 lg:size-16"
        />
        <h3 className="text-2xl lg:text-3xl font-semibold">Katriyam</h3>
      </div>

      <div className="h-[calc(100svh-92px)] grid container mx-auto px-4 py-12 md:px-6 lg:px-8 lg:gap-8 xl:gap-0 lg:grid-cols-12 items-center">
        {/* LEFT SIDE */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <HeroPill
            href="#home"
            label="Introducing Katriyam"
            announcement="📣"
            className="w-fit bg-primary/20 ring-primary [&_div]:bg-[hsl(210,40%,96.1%)] [&_div]:text-[hsl(187,80.8%,34.7%)] [&_p]:text-primary [&_svg_path]:fill-primary mb-4"
          />
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Grow your business with Katriyam
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our goal
            is to streamline SMB trade, making it easier and faster than ever.
          </p>
          <Button
            asChild
            size="lg"
            className="mr-3 mb-3 gap-2 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer"
          >
            <Link href="#contact">
              Get Started <ArrowRightIcon />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="cursor-pointer"
          >
            <Link href="#services">Our Services</Link>
          </Button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:block">
          <Image
            src="/carousel-1.png"
            alt="hero image"
            width={600}
            height={400}
            className="w-full"
          />
          {/* <Carousel>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="flex rounded-md aspect-video bg-muted items-center justify-center">
                    <Image
                      src="/carousel-1.jpg"
                      alt="hero image"
                      width={400}
                      height={300}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel> */}
        </div>
      </div>
    </section>
  );
}
