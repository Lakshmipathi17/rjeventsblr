import { AnimatePresence, motion } from "framer-motion";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

import heroVideo from "@/assets/hero-video.mp4";
import hero1 from "@/assets/gallery-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import menuPdf from "@/assets/menu.pdf";
import cater from "@/assets/catering-service.webp";
import { useState } from "react";

//  adding images here — unlimited
const images = [
  { src: gallery1, alt: "Wedding couple portrait", position: "object-center" },
  { src: gallery2, alt: "bride single", position: "object-center" },
  { src: gallery3, alt: "couple photo", position: "object-center" },
  { src: gallery4, alt: "decoration", position: "object-top" },
  { src: gallery5, alt: "bride single2", position: "object-center" },
  { src: gallery6, alt: "bride single3", position: "object-bottom" },
  { src: gallery8, alt: "bride single4", position: "object-center" },
  { src: gallery7, alt: "couple photo", position: "object-center" },
  { src: gallery9, alt: "decoration", position: "object-top" },
  { src: gallery10, alt: "bride single5", position: "object-top" },
  { src: gallery11, alt: "bride single6", position: "object-center" },
  { src: gallery12, alt: "bride single7", position: "object-center" },
];

const packageComparison = {
  packages: [
    { name: "Basic", price: "₹60,000" },
    { name: "Premium", price: "₹1,20,000" },
    { name: "Luxury", price: "₹2,10,000" }
  ],

  features: [
    {
      name: "Traditional Photography",
      note: "covers stage and event",
      values: [true, true, true]
    },
    {
      name: "Traditional Videography",
      note: "covers stage and event",
      values: [true, true, true]
    },
    {
      name: "Mixing Unit",
      values: [true, true, true]
    },
    {
      name: "Unlimited Photos",
      values: [true, true, true]
    },
    {
      name: "2 Album 35 sheets",
      values: [true, true, true]
    },
    {
      name: "Candid Photography",
      values: [false, true, true]
    },
    {
      name: "Candid Videography",
      values: [false, true, true]
    },
    {
      name: "Drone",
      values: [false, true, true]
    },
    {
      name: "LED Wall",
      values: [false, true, true]
    },
    {
      name: "Pre Wedding Shoot",
      values: [false, false, true]
    },
    {
      name: "Video song Shoot",
      values: [false, false, true]
    },
    {
      name: "Insta status Invitation video",
      values: [false, false, true]
    },
    {
      name: "Reception insta status short video",
      values: [false, false, true]
    },
  ]
};


const CateringWedding = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <>
      <TopHeader />
      <Navbar />

      <div className="bg-background">
        {/* HERO VIDEO */}
        <section className="relative h-[88vh] flex items-center justify-center overflow-hidden">

        {/* Background Video */}
        <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110 animate-[slowZoom_18s_linear_infinite]"
        >
            <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">

            {/* Small Tag */}
            <p className="text-gold uppercase tracking-[6px] text-xs mb-6">
            RJ Events Catering
            </p>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">

            <span className="text-white">
                Wedding
            </span>{" "}

            <span className="text-gold">
                Catering
            </span>

            </h1>

            {/* Gold Divider */}
            <div className="w-24 h-[2px] bg-gold mx-auto mb-8"></div>

            {/* Subtitle */}
            <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Experience the art of culinary excellence with RJ Events Catering – where every dish is a masterpiece, crafted to perfection for your unforgettable celebrations.
            </p>

            {/* CTA Button */}
            <a
            href="#packages"
            className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-wider text-sm transition-all duration-500 hover:bg-gold hover:text-maroon-deep hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
            Book Us For Catering
            </a>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 text-xs tracking-widest">
            <span className="mb-2">SCROLL</span>
            <div className="w-[1px] h-10 bg-gold animate-pulse"></div>
        </div>
        {/* Bottom Cinematic Fade */}
        <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        </section>
{/* OUR MENU */}
<section className="py-28 bg-muted/20">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="section-heading">
        Our <span className="gold">Menu</span>
      </h2>

      <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
        Explore our carefully curated catering menu crafted to bring
        unforgettable flavors to your celebrations.
      </p>
    </div>

    {/* PDF Preview */}
    <div className="max-w-5xl mx-auto border border-border shadow-lg overflow-hidden">

      <iframe
        src={menuPdf}
        className="w-full h-[700px]"
      ></iframe>

    </div>

    {/* Download Button */}
    <div className="text-center mt-10">
      <a
        href={menuPdf}
        download
        className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-wider text-sm transition-all duration-500 hover:bg-gold hover:text-maroon-deep hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
      >
        Download Menu
      </a>
    </div>

  </div>
</section>
{/* CATERING CTA */}
<section className="py-28 bg-muted/20">
  <div className="container mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
          No Matter the Size of Your Celebration,
          <br />
          <span className="text-gold">
            RJ Events Will Take Care of Every Guest
          </span>
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
          Whether your celebration is an intimate gathering or a grand wedding
          with hundreds of guests, our expert catering team ensures exceptional
          taste, flawless service, and a memorable dining experience for every
          guest.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-wider text-sm transition-all duration-500 hover:bg-gold hover:text-maroon-deep hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
        >
          Contact Us To Know More
        </a>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative overflow-hidden">

        {/* Gold frame */}
        <div className="absolute -top-6 -left-6 w-full h-full border border-gold/40"></div>

        <img
          src={cater}
          alt="Wedding Catering"
          className="relative w-full h-[420px] object-cover shadow-xl"
        />

      </div>

    </div>

  </div>
</section>
      </div>

      <Footer />
      <FloatingContact />
    </>
  );
};

export default CateringWedding;