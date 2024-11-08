"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // changed bg-colour
    <main className="relative bg-cyan-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Team />
        <Footer />
      </div>
    </main>
  );
}
