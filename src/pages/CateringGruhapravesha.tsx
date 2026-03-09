import { AnimatePresence, motion } from "framer-motion";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact"; 


import hero1 from "@/assets/gruhapravesha-service.jpg";
import { useState } from "react";


const CateringGruhapravesha = () => {
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
      RJ Events Gruhapravesha Catering
    </p>

    {/* Heading */}
    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
      Celebrate Your New Beginning
      <br />
      <span className="text-gold">
        With RJ Events
      </span>
    </h1>

    {/* Description */}
    <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
      Make your Gruhapravesha ceremony truly special with traditional and
      delicious catering by RJ Events. From authentic South Indian meals to
      complete event service, we ensure your housewarming celebration is
      memorable for family and guests.
    </p>

    {/* Button */}
    <a
      href="/contact"
      className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-wider text-sm transition-all duration-500 hover:bg-gold hover:text-maroon-deep hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
    >
      Book Your Gruhapravesha Catering
    </a>

  </div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

</section>
      </div>

      <Footer />
      <FloatingContact />
    </>
  );
};

export default CateringGruhapravesha;