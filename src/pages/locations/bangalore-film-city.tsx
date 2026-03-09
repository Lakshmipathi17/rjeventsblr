import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import gallery1 from "@/assets/bangalore-film-city/gallery-01.jpeg";
import gallery2 from "@/assets/bangalore-film-city/gallery-02.jpeg";
import gallery3 from "@/assets/bangalore-film-city/gallery-03.jpeg";
import gallery4 from "@/assets/bangalore-film-city/gallery-04.jpeg";
import gallery5 from "@/assets/bangalore-film-city/gallery-05.jpeg";
import gallery6 from "@/assets/bangalore-film-city/gallery-06.webp";
import gallery7 from "@/assets/bangalore-film-city/gallery-07.webp";
import gallery8 from "@/assets/bangalore-film-city/gallery-08.webp";
import gallery9 from "@/assets/bangalore-film-city/gallery-09.webp";
import gallery10 from "@/assets/bangalore-film-city/gallery-10.webp";
import gallery11 from "@/assets/bangalore-film-city/gallery-11.webp";
import gallery12 from "@/assets/bangalore-film-city/gallery-12.webp";
import gallery13 from "@/assets/bangalore-film-city/gallery-13.webp";
import gallery14 from "@/assets/bangalore-film-city/gallery-14.webp";
import gallery15 from "@/assets/bangalore-film-city/gallery-15.webp";
import gallery16 from "@/assets/bangalore-film-city/gallery-16.webp";
import gallery17 from "@/assets/bangalore-film-city/gallery-17.webp";
import gallery18 from "@/assets/bangalore-film-city/gallery-18.webp";
import gallery19 from "@/assets/bangalore-film-city/gallery-19.webp";
import gallery20 from "@/assets/bangalore-film-city/gallery-20.webp";
import gallery21 from "@/assets/bangalore-film-city/gallery-21.webp";
import gallery22 from "@/assets/bangalore-film-city/gallery-22.webp";
import gallery23 from "@/assets/bangalore-film-city/gallery-23.webp";
import gallery24 from "@/assets/bangalore-film-city/gallery-24.webp";
import gallery25 from "@/assets/bangalore-film-city/gallery-25.webp";
import gallery26 from "@/assets/bangalore-film-city/gallery-26.webp";
import gallery27 from "@/assets/bangalore-film-city/gallery-27.webp";
import gallery28 from "@/assets/bangalore-film-city/gallery-28.webp";
import gallery29 from "@/assets/bangalore-film-city/gallery-29.jpeg";



/* ADD ALL IMAGES HERE (UP TO 40+) */
const images = [
gallery1,
gallery2,
gallery3,
gallery4,
gallery5,
gallery6,
gallery7,
gallery8,
gallery9,
gallery10,
gallery11,
gallery12,
gallery13,
gallery14,
gallery15,
gallery16,
gallery17,
gallery18,
gallery19,
gallery20,
gallery21,
gallery22,
gallery23,
gallery24,
gallery25,
gallery26,
gallery27,
gallery28,
gallery29
];

const BangaloreFilmCity = () => {

  const [selected,setSelected] = useState<string | null>(null);

  return (
    <>
      <TopHeader />
      <Navbar />
<section className="py-36 bg-background">

  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-24">

      <p className="text-gold uppercase tracking-[8px] text-xs mb-4">
        RJ Events
      </p>

      <h1 className="font-heading text-4xl md:text-6xl leading-tight">
         Bangalore Film City Pre-Wedding <span className="text-gold">Gallery</span>
      </h1>

      <div className="w-24 h-[2px] bg-gold mx-auto mt-6"></div>

      <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
        A glimpse into the unforgettable celebrations we have crafted
        with passion, elegance, and timeless beauty.
      </p>

    </div>
{/* Luxury Editorial Grid */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
  {images.map((img, i) => {

    const pattern = i % 6;
    let span = "";

    if (pattern === 0) span = "md:col-span-2 md:row-span-2";
    else if (pattern === 3) span = "md:col-span-2";

    return (

      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: i * 0.015 }}
        className={`relative overflow-hidden cursor-pointer group ${span}`}
        onClick={() => setSelected(img)}
      >

        {/* Image */}
        <img
          src={img}
          loading={i < 4 ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={i < 4 ? "high" : "low"}
          className="w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110 will-change-transform"
        />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>

        {/* Luxury Gold Border */}
        <div className="absolute inset-0 border border-transparent group-hover:border-gold/50 transition duration-700"></div>

        {/* Gold corner accents */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/70 transition duration-700"></div>

        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/70 transition duration-700"></div>

      </motion.div>

    );

  })}

</div>


{/* Lightbox */}
<AnimatePresence>

  {selected && (

    <motion.div
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
    >

      <motion.img
        src={selected}
        loading="eager"
        decoding="async"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl max-h-[85vh] object-contain shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      />

    </motion.div>

  )}

</AnimatePresence>
  </div>

</section>
      <Footer />
      <FloatingContact />
    </>
  );
};

export default BangaloreFilmCity;