import { AnimatePresence, motion } from "framer-motion";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact"; 

import hero1 from "@/assets/gruhapraveshaimg.jpg";
import decor from "@/assets/gruhapravesha-service.jpg";
import cater from "@/assets/cateringimage.jpg";
import { useState } from "react";


const PackageGruhapravesha = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <>
      <TopHeader />
      <Navbar />

      <div className="bg-background">
        {/* GRUHAPRAVESHA HERO */}
<section className="relative h-[88vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <img
    src={hero1}
    alt="Gruhapravesha Celebration"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl">

    {/* Tag */}
    <p className="text-gold uppercase tracking-[6px] text-xs mb-6">
      RJ Events Gruhapravesha Packages
    </p>

    {/* Heading */}
    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
      Celebrate Your Gruhapravesha
      <br />
      <span className="text-gold">
        With RJ Events
      </span>
    </h1>

    {/* Description */}
    <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
      From traditional decorations and memorable photography to delicious
      catering and complete event coordination, RJ Events provides everything
      you need to celebrate your housewarming ceremony beautifully.
    </p>

    {/* Button */}
    <a
      href="/contact"
      className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-wider text-sm transition-all duration-500 hover:bg-gold hover:text-maroon-deep hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
    >
      Book Your Gruhapravesha Package
    </a>

  </div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

</section>
{/* COMPLETE GRUHAPRAVESHA SERVICES */}
<section className="py-28 bg-background">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="font-heading text-4xl md:text-5xl mb-4">
        Complete Gruhapravesha <span className="text-gold">Services</span>
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        RJ Events provides everything needed for a beautiful housewarming
        ceremony — from capturing special memories to designing elegant
        decorations and serving delicious cuisine for your guests.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Photography */}
      <a
        href="/photography-gruhapravesha"
        className="relative h-[360px] overflow-hidden group cursor-pointer"
      >
        <img
          src={hero1}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500" />

        <div className="absolute bottom-8 left-8 text-white">
          <h3 className="font-heading text-2xl mb-2">
            Gruhapravesha Photography
          </h3>

          <p className="text-white/80 text-sm max-w-[220px]">
            Capturing joyful memories of your new beginning.
          </p>

          <div className="w-10 h-[2px] bg-gold mt-3 group-hover:w-16 transition-all"></div>
        </div>
      </a>

      {/* Decoration */}
      <a
        href="/decoration-gruhapravesha"
        className="relative h-[360px] overflow-hidden group cursor-pointer"
      >
        <img
          src={decor}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500" />

        <div className="absolute bottom-8 left-8 text-white">
          <h3 className="font-heading text-2xl mb-2">
            Gruhapravesha Decoration
          </h3>

          <p className="text-white/80 text-sm max-w-[220px]">
            Creating warm and elegant setups for your housewarming ceremony.
          </p>

          <div className="w-10 h-[2px] bg-gold mt-3 group-hover:w-16 transition-all"></div>
        </div>
      </a>

      {/* Catering */}
      <a
        href="/catering-gruhapravesha"
        className="relative h-[360px] overflow-hidden group cursor-pointer"
      >
        <img
          src={cater}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500" />

        <div className="absolute bottom-8 left-8 text-white">
          <h3 className="font-heading text-2xl mb-2">
            Gruhapravesha Catering
          </h3>

          <p className="text-white/80 text-sm max-w-[220px]">
            Delicious cuisine prepared to welcome your guests.
          </p>

          <div className="w-10 h-[2px] bg-gold mt-3 group-hover:w-16 transition-all"></div>
        </div>
      </a>

    </div>

  </div>
</section>
      </div>

      <Footer />
      <FloatingContact />
    </>
  );
};

export default PackageGruhapravesha;