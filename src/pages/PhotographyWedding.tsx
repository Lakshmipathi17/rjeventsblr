import { AnimatePresence, motion } from "framer-motion";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

import heroVideo from "@/assets/photography-hero.mp4";
import gallery11 from "@/assets/natural-locations/gallery-11.jpg";
import gallery12 from "@/assets/natural-locations/gallery-12.jpg";
import gallery13 from "@/assets/natural-locations/gallery-13.jpg";
import gallery14 from "@/assets/natural-locations/gallery-14.jpg";
import gallery15 from "@/assets/natural-locations/gallery-15.jpg";
import gallery16 from "@/assets/natural-locations/gallery-16.jpg";
import gallery17 from "@/assets/natural-locations/gallery-17.jpg";
import gallery18 from "@/assets/natural-locations/gallery-18.jpg";
import gallery19 from "@/assets/natural-locations/gallery-19.jpg";
import gallery20 from "@/assets/natural-locations/gallery-20.jpg";
import gallery21 from "@/assets/natural-locations/gallery-21.jpg";
import gallery22 from "@/assets/natural-locations/gallery-22.jpg";
import gallery23 from "@/assets/natural-locations/gallery-23.jpg";
import gallery24 from "@/assets/natural-locations/gallery-24.jpg";
import gallery25 from "@/assets/natural-locations/gallery-25.jpg";
import gallery26 from "@/assets/natural-locations/gallery-26.jpg";
import gallery27 from "@/assets/natural-locations/gallery-27.jpg";
import gallery28 from "@/assets/natural-locations/gallery-28.jpg";
import gallery29 from "@/assets/natural-locations/gallery-29.jpg";
import gallery30 from "@/assets/natural-locations/gallery-30.jpg";
import gallery31 from "@/assets/natural-locations/gallery-31.jpg";
import gallery32 from "@/assets/natural-locations/gallery-32.jpg";
import gallery33 from "@/assets/natural-locations/gallery-33.jpg";
import gallery34 from "@/assets/natural-locations/gallery-34.jpg";
import loc1 from "@/assets/natural-locations/gallery-1.jpg";
import loc2 from "@/assets/elements-resort/gallery-2.jpg";
import loc3 from "@/assets/bangalore-film-city/gallery-01.jpeg";
import loc4 from "@/assets/shire-studio/gallery-01.jpg";
import loc5 from "@/assets/gallery-13.png";
import loc6 from "@/assets/beyondThespace/gallery-01.jpeg";
import bridetraditional from "@/assets/bride-traditional.webp";
import groomcand from "@/assets/groom-candid.webp";
import drone from "@/assets/drone.webp";
import ledwall from "@/assets/led-wall.avif";
import premiumalbum from "@/assets/premium-album.jpg";
import album from "@/assets/albumcuration.jpg";
import photobooth from "@/assets/photobooth.png";
import photobooth360 from "@/assets/photobooth360.jpg";
import photoframe from "@/assets/photo-frame.webp";
import invitation from "@/assets/invitation.jpeg";
import { useState } from "react";

//  adding images here — unlimited
const images = [
  { src: gallery13, alt: "Wedding couple portrait", position: "object-center" },
  { src: gallery14, alt: "bride single", position: "object-center" },
  { src: gallery15, alt: "couple photo", position: "object-center" },
  { src: gallery16, alt: "decoration", position: "object-top" },
  { src: gallery17, alt: "bride single2", position: "object-center" },
  { src: gallery18, alt: "bride single3", position: "object-bottom" },
  { src: gallery19, alt: "bride single4", position: "object-center" },
  { src: gallery20, alt: "couple photo", position: "object-center" },
  { src: gallery21, alt: "decoration", position: "object-top" },
  { src: gallery11, alt: "bride single6", position: "object-center" },
  { src: gallery12, alt: "bride single7", position: "object-center" },
  { src: gallery22, alt: "bride single8", position: "object-center" },
  { src: gallery23, alt: "bride single9", position: "object-center" },
  { src: gallery24, alt: "bride single10", position: "object-center" },
  { src: gallery25, alt: "decoration", position: "object-center" },
  { src: gallery26, alt: "bride single12", position: "object-center" },
  { src: gallery27, alt: "bride single13", position: "object-center" },
  { src: gallery28, alt: "bride single14", position: "object-center" },
  { src: gallery29, alt: "bride single15", position: "object-center" },
  { src: gallery30, alt: "bride single16", position: "object-center" },
  { src: gallery31, alt: "bride single17", position: "object-center" },
  { src: gallery32, alt: "bride single18", position: "object-center" },
  { src: gallery33, alt: "bride single19", position: "object-center" },
  { src: gallery34, alt: "bride single20", position: "object-center" },
];

const packageComparison = {
  packages: [
    { name: "Basic" },
    { name: "Premium"},
    { name: "Luxury"}
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

const addons = [
  { name: "Drone", image: drone },
  { name: "LED Wall", image: ledwall },
  { name: "Extra Album", image: album },
  { name: "Premium Album", image: premiumalbum },
  { name: "Groom/Bride Traditional Photo & Video", image: bridetraditional },
  { name: "Groom/Bride Candid Photo & Video", image: groomcand },
  { name: "Extra Insta Status Video", image: invitation },
  { name: "Photo Frames", image: photoframe },
  { name: "Photo Booth", image: photobooth },
  { name: "Photo Booth 360", image: photobooth360 }
];

const locations = [
  "Nandi Hills",
  "Bangalore Palace",
  "Lalbagh Garden",
  "Cubbon Park",
  "Chikkaballapur Hills",
  "Coorg Nature Spots",
];

const PhotographyWedding = () => {
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
            RJ Events Photography
            </p>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">

            <span className="text-white">
                Wedding
            </span>{" "}

            <span className="text-gold">
                Photography
            </span>

            </h1>

            {/* Gold Divider */}
            <div className="w-24 h-[2px] bg-gold mx-auto mb-8"></div>

            {/* Subtitle */}
            <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Capturing timeless emotions, sacred rituals, and unforgettable
            moments that turn your wedding into a lifelong memory.
            </p>

            {/* CTA Button */}
            <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-wider text-sm transition-all duration-500 hover:bg-gold hover:text-maroon-deep hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
            Book Us For Photography
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
{/* WEDDING PACKAGES */}
<section id="packages" className="py-32 bg-background">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="font-heading text-4xl md:text-5xl mb-4">
        Wedding & Reception <span className="text-gold">Packages</span>
      </h2>
    </div>

    <div className="overflow-x-auto border border-border shadow-[0_15px_40px_rgba(0,0,0,0.35)]">

      <table className="w-full text-center border-separate border-spacing-0 pricing-table">

        {/* HEADER */}
        <thead>
          <tr className="bg-maroon text-white">

            <th className="py-5 text-lg font-semibold tracking-wide border-r border-border relative">
              Packages
            </th>

            {packageComparison.packages.map((pkg, i) => (
              <th
                key={i}
                className={`py-5 relative border-r border-border transition-all duration-300 ${
                  i === 2
                    ? "bg-maroon/95 border-l border-gold/40 border-r border-gold/40"
                    : ""
                }`}
              >

                <div className="flex flex-col items-center gap-1">

                  {/* Badge */}
                  {i === 2 && (
                    <span className="bg-gold text-maroon-deep text-[10px] px-3 py-[3px] uppercase tracking-wider font-semibold mb-1">
                      Most Popular
                    </span>
                  )}

                  <span className="text-lg font-semibold">
                    {pkg.name}
                  </span>

                  <span className="text-sm opacity-80">
                    {pkg.price}
                  </span>

                </div>

              </th>
            ))}

          </tr>
        </thead>

        {/* BODY */}
        <tbody>

          {packageComparison.features.map((feature, i) => (
            <tr
              key={i}
              className="border-b border-border hover:bg-muted/20 transition"
            >

              {/* Feature Name */}
              <td className="py-3 text-left pl-8 border-r border-border">

                <div className="text-sm font-medium text-foreground">
                  {feature.name}
                </div>

                {feature.note && (
                  <div className="text-[11px] text-muted-foreground mt-[2px]">
                    {feature.note}
                  </div>
                )}

              </td>

              {/* Package Columns */}
              {feature.values.map((value, j) => (
                <td
                  key={j}
                  className={`py-3 border-r border-border transition-all duration-300 hover:bg-muted/20 ${
                    j === 2
                      ? "bg-muted/10 border-l border-gold/20 border-r border-gold/20"
                      : ""
                  }`}
                >

                  {value ? (
                    <span className="text-gold text-xl font-semibold">
                      ✓
                    </span>
                  ) : (
                    <span className="text-muted-foreground/30 text-xl">
                      —
                    </span>
                  )}

                </td>
              ))}

            </tr>
          ))}

          {/* BOOK BUTTON ROW */}
          <tr>

            <td className="border-r border-border"></td>

            {packageComparison.packages.map((pkg, i) => (
              <td
                key={i}
                className={`py-6 border-r border-border transition-all duration-300 hover:bg-muted/20 ${
                  i === 2
                    ? "bg-muted/10 border-l border-gold/20 border-r border-gold/20"
                    : ""
                }`}
              >

                <button   onClick={() => window.location.href="/contact"} className="px-6 py-2 border border-gold text-gold text-xs uppercase tracking-wider transition-all duration-400 hover:bg-gold hover:text-maroon-deep hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                  Book {pkg.name}
                </button>

              </td>
            ))}

          </tr>

        </tbody>

      </table>

    </div>

    {/* Footer */}
    <p className="text-center text-sm text-muted-foreground mt-8">
      Two Days shoot, upto 8 hours each
    </p>

  </div>
</section>
{/* ADD-ON SERVICES */}
<section id="addons" className="py-28 bg-muted/20">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="font-heading text-4xl md:text-5xl mb-4">
        Add-On <span className="text-gold">Services</span>
      </h2>
        <p className="text-center text-sm text-muted-foreground mb-10">
        These services can be added to any photography package.
        </p>
    </div>

    {/* Add-on Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {addons.map((addon, i) => (
        <div
          key={i}
          className="group relative overflow-hidden border border-border bg-background shadow-md transition-all duration-500 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
        >

          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={addon.image}
              alt={addon.name}
              className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition"></div>
          </div>

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <h3 className="text-white text-sm md:text-base font-medium tracking-wide">
              {addon.name}
            </h3>
          </div>

        </div>
      ))}

    </div>

  </div>
</section>
{/* Pre Wedding Gallery */}
<section id="gallery" className="py-24 bg-background">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading">
        Pre-Wedding <span className="gold">Gallery</span>
      </h2>
      <div className="w-24 h-[1px] bg-gold mx-auto mt-6"></div>
      <p className="text-muted-foreground mt-6 max-w-2xl mx-auto font-body">
        A glimpse into the celebrations we've brought to life
      </p>
    </motion.div>

{/* Scalable Editorial Grid */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">

  {images.map((img, i) => {
    const pattern = i % 6;

    let spanClass = "";

    if (pattern === 0) {
      spanClass = "md:col-span-2 md:row-span-2";
    } else if (pattern === 3) {
      spanClass = "md:col-span-2";
    }

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: i * 0.015 }}
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden rounded-sm cursor-pointer group ${spanClass}`}
        onClick={() => setSelected(img.src)}
      >

        <img
          src={img.src}
          alt={img.alt}
          loading={i < 4 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={i < 4 ? "high" : "low"}
          className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105 will-change-transform"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

        {/* Gold Border */}
        <div className="absolute inset-0 border border-transparent group-hover:border-gold/60 transition-all duration-500 pointer-events-none" />

      </motion.div>
    );
  })}

</div>

{/* Lightbox */}
<AnimatePresence>
  {selected && (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
    >
      <motion.img
        src={selected}
        alt="Expanded View"
        loading="eager"
        decoding="async"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="max-w-6xl max-h-[85vh] object-contain rounded-lg"
      />
    </motion.div>
  )}
</AnimatePresence>

  </div>
</section>
{/* CINEMATIC VIDEO GALLERY */}
<section className="py-28 bg-muted/20">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="section-heading">
        Cinematic <span className="gold">Video Gallery</span>
      </h2>

      <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
        Experience the beauty, emotions, and cinematic storytelling of the
        weddings we capture.
      </p>
    </div>

    {/* Video Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        "https://www.youtube.com/watch?v=Bmvui22ZBaA",
        "https://www.youtube.com/watch?v=rgYt4Lc6az0",
        "https://www.youtube.com/watch?v=82bGmubVm1A",
      ].map((video, i) => {

        const videoId = video.split("v=")[1];

        return (
          <a
            key={i}
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden cursor-pointer"
          >

            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Wedding Video"
              className="w-full h-[280px] object-cover transition-transform duration-[1000ms] group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center border border-gold rounded-full bg-black/40 backdrop-blur-sm group-hover:scale-110 transition">
                <svg
                  className="w-6 h-6 text-gold ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Gold Hover Border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-gold/60 transition-all duration-500"></div>

          </a>
        );
      })}

    </div>

  </div>
</section>
{/* PRE-WEDDING LOCATIONS */}
<section className="py-28 bg-background">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="section-heading">
        Pre-Wedding <span className="gold">Locations</span>
      </h2>

      <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
        Beautiful destinations perfect for capturing timeless pre-wedding
        memories.
      </p>
    </div>

    {/* Locations Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        { name: "Natural Locations", image: loc1, link: "/locations/natural-locations" },
        { name: "Elements Resort", image: loc2, link: "/locations/elements-resort" },
        { name: "Bangalore Film City", image: loc3, link: "/locations/bangalore-film-city" },
        { name: "Shire Studio", image: loc4, link: "/locations/shire-studio" },
        { name: "Shoot in Studio", image: loc5, link: "/locations/shoot-in-studio" },
        { name: "Beyond The Space", image: loc6, link: "/locations/beyond-the-space" }
      ].map((location, i) => (

        <a
          key={i}
          href={location.link}
          className="group relative overflow-hidden cursor-pointer"
        >

          {/* Background Image */}
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-[260px] object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition"></div>

          {/* Location Name */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <h3 className="text-white text-2xl font-heading tracking-wide">
              {location.name}
            </h3>
          </div>

          {/* Gold Border */}
          <div className="absolute inset-0 border border-transparent group-hover:border-gold/60 transition-all duration-500"></div>

        </a>

      ))}

    </div>

  </div>
</section>

      </div>

      <Footer />
      <FloatingContact />
    </>
  );
};

export default PhotographyWedding;