import { AnimatePresence, motion } from "framer-motion";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

import heroVideo from "@/assets/wedding-decor.mp4";
import gallery1 from "@/assets/decor-gallery/gallery-1.jpg";
import gallery2 from "@/assets/decor-gallery/gallery-2.jpg";
import gallery3 from "@/assets/decor-gallery/gallery-3.jpg";
import gallery4 from "@/assets/decor-gallery/gallery-4.jpg";
import gallery5 from "@/assets/decor-gallery/gallery-5.jpg";
import gallery6 from "@/assets/decor-gallery/gallery-6.jpg";
import gallery7 from "@/assets/decor-gallery/gallery-7.jpg";
import gallery8 from "@/assets/decor-gallery/gallery-8.jpg";
import gallery9 from "@/assets/decor-gallery/gallery-9.jpg";
import gallery10 from "@/assets/decor-gallery/gallery-10.jpg";
import gallery11 from "@/assets/decor-gallery/gallery-11.jpg";
import gallery12 from "@/assets/decor-gallery/gallery-12.jpg";
import gallery13 from "@/assets/decor-gallery/gallery-13.jpg";
import gallery14 from "@/assets/decor-gallery/gallery-14.jpg";
import gallery15 from "@/assets/decor-gallery/gallery-15.jpg";
import gallery16 from "@/assets/decor-gallery/gallery-16.jpg";
import gallery17 from "@/assets/decor-gallery/gallery-17.jpg";
import gallery18 from "@/assets/decor-gallery/gallery-18.jpg";
import gallery19 from "@/assets/decor-gallery/gallery-19.jpg";
import gallery20 from "@/assets/decor-gallery/gallery-20.jpg";
import gallery21 from "@/assets/decor-gallery/gallery-21.jpg";
import gallery22 from "@/assets/decor-gallery/gallery-22.jpg";
import gallery23 from "@/assets/decor-gallery/gallery-23.jpg";
import gallery24 from "@/assets/decor-gallery/gallery-24.jpg";
import gallery25 from "@/assets/decor-gallery/gallery-25.jpg";
import gallery26 from "@/assets/decor-gallery/gallery-26.jpg";
import gallery27 from "@/assets/decor-gallery/gallery-27.jpg";
import gallery28 from "@/assets/decor-gallery/gallery-28.jpg";
import gallery29 from "@/assets/decor-gallery/gallery-29.jpg";
import gallery30 from "@/assets/decor-gallery/gallery-30.jpg";
import stagedecor from "@/assets/stage.jpeg";
import stagepathway from "@/assets/stage-pathway.jpeg";
import selfiebooth from "@/assets/selfie-booth.jpeg";
import conventionentrance from "@/assets/conventionentrance.jpeg";
import conventionpathway from "@/assets/conventionpathway.jpeg";
import nameboard from "@/assets/nameboard.jpeg";
import muhurthamset from "@/assets/muhartham-set.jpg";
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
{ src: gallery13, alt: "couple photo2", position: "object-center" },
{ src: gallery14, alt: "wedding decoration2", position: "object-top" },
{ src: gallery15, alt: "bride single8", position: "object-center" },
{ src: gallery16, alt: "couple candid", position: "object-center" },
{ src: gallery17, alt: "wedding decoration3", position: "object-top" },
{ src: gallery18, alt: "bride portrait", position: "object-center" },
{ src: gallery19, alt: "couple moment", position: "object-center" },
{ src: gallery20, alt: "wedding stage decoration", position: "object-top" },
{ src: gallery21, alt: "bride portrait2", position: "object-center" },
{ src: gallery22, alt: "couple candid2", position: "object-center" },
{ src: gallery23, alt: "wedding decoration4", position: "object-top" },
{ src: gallery24, alt: "bride portrait3", position: "object-center" },
{ src: gallery25, alt: "couple portrait3", position: "object-center" },
{ src: gallery26, alt: "wedding decoration5", position: "object-top" },
{ src: gallery27, alt: "bride portrait4", position: "object-center" },
{ src: gallery28, alt: "couple candid3", position: "object-center" },
{ src: gallery29, alt: "wedding decoration6", position: "object-top" },
{ src: gallery30, alt: "couple portrait4", position: "object-center" },
];

const DecorationWedding = () => {
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
            RJ Events Decoration
            </p>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">

            <span className="text-white">
                Wedding
            </span>{" "}

            <span className="text-gold">
                Decoration
            </span>

            </h1>

            {/* Gold Divider */}
            <div className="w-24 h-[2px] bg-gold mx-auto mb-8"></div>

            {/* Subtitle */}
            <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Transforming Venues into Dreamy Realities with RJ Events
            </p>

            {/* CTA Button */}
            <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-wider text-sm transition-all duration-500 hover:bg-gold hover:text-maroon-deep hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
            Book Us For Decoration
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
        {/* WHAT WE DESIGN */}
<section className="py-28 bg-muted/20">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="font-heading text-4xl md:text-5xl mb-4">
        What We <span className="text-gold">Design</span>
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        From grand stage setups to beautiful entry pathways, RJ Events creates
        complete wedding environments that turn every venue into a magical celebration.
      </p>
    </div>

    {/* Decoration Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        { title: "Stage Decoration", img: stagedecor },
        { title: "Entrance Name Board Decoration", img: nameboard },
        { title: "Gate Pathway Decoration", img: conventionpathway },
        { title: "Convention Hall Entrance", img: conventionentrance },
        { title: "Stage Pathway Decoration", img: stagepathway },
        { title: "Selfie Booth", img: selfiebooth },
        { title: "Muhurtham Set Decoration", img: muhurthamset },
      ].map((item, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          viewport={{ once: true }}
          className="relative h-[280px] overflow-hidden group cursor-pointer"
        >

          <img
            src={item.img}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500" />

          {/* Title */}
          <div className="absolute bottom-6 left-6 text-white">

            <h3 className="font-heading text-xl">
              {item.title}
            </h3>

            <div className="w-10 h-[2px] bg-gold mt-2 group-hover:w-16 transition-all"></div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>
{/* Decoration Gallery */}
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
        Wedding Decoration <span className="gold">Gallery</span>
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
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.03 }}
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden rounded-sm cursor-pointer group ${spanClass}`}
        onClick={() => setSelected(img.src)}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
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
{/* DECORATION CTA */}
<section className="py-28 bg-muted/20">
  <div className="container mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
          Transform Your Wedding Venue Into
          <br />
          <span className="text-gold">
            A Grand Celebration
          </span>
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
          From breathtaking stage decorations to beautifully designed entrance
          pathways, name boards, muhurtham sets, and selfie booths, RJ Events
          creates stunning wedding environments that leave a lasting impression
          on every guest.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-wider text-sm transition-all duration-500 hover:bg-gold hover:text-maroon-deep hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
        >
          Contact Us To Plan Your Decoration
        </a>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative overflow-hidden">

        {/* Gold frame */}
        <div className="absolute -top-6 -left-6 w-full h-full border border-gold/40"></div>

        <img
          src={muhurthamset}
          alt="Wedding Decoration"
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

export default DecorationWedding;