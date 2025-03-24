"use client";

import { Home, MessageCircleMore, Briefcase, Mail, Users } from "lucide-react";
import { NavBar } from "@/components/tubelight-navbar";
import { Suspense } from "react";

export function NavigationMenu() {
  const navItems = [
    { name: "Home", url: "/#home", icon: Home },
    { name: "Services", url: "/#services", icon: Briefcase },
    { name: "Testimonials", url: "/#testimonials", icon: MessageCircleMore },
    { name: "Contact", url: "/#contact", icon: Mail },
    { name: "About Us", url: "/about", icon: Users },
  ];

  return (
    <Suspense>
      <NavBar items={navItems} />
    </Suspense>
  );
}
