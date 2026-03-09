import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import gallery1 from "@/assets/beyondThespace/gallery-01.jpeg";
import gallery2 from "@/assets/beyondThespace/gallery-02.jpeg";
import gallery3 from "@/assets/beyondThespace/gallery-03.jpeg";
import gallery4 from "@/assets/beyondThespace/gallery-04.jpeg";
import gallery5 from "@/assets/beyondThespace/gallery-05.jpeg";
import gallery6 from "@/assets/beyondThespace/gallery-06.jpeg";
import gallery7 from "@/assets/beyondThespace/gallery-07.jpeg";
import gallery8 from "@/assets/beyondThespace/gallery-08.jpeg";
import gallery9 from "@/assets/beyondThespace/gallery-09.jpeg";
import gallery10 from "@/assets/beyondThespace/gallery-10.jpeg";
import gallery11 from "@/assets/beyondThespace/gallery-11.jpeg";
import gallery12 from "@/assets/beyondThespace/gallery-12.jpeg";
import gallery13 from "@/assets/beyondThespace/gallery-13.jpeg";
import gallery14 from "@/assets/beyondThespace/gallery-14.jpeg";
import gallery15 from "@/assets/beyondThespace/gallery-15.jpeg";
import gallery16 from "@/assets/beyondThespace/gallery-16.jpeg";
import gallery17 from "@/assets/beyondThespace/gallery-17.jpeg";
import gallery18 from "@/assets/beyondThespace/gallery-18.jpeg";
import gallery19 from "@/assets/beyondThespace/gallery-19.jpeg";
import gallery20 from "@/assets/beyondThespace/gallery-20.jpeg";
import gallery21 from "@/assets/beyondThespace/gallery-21.jpeg";
import gallery22 from "@/assets/beyondThespace/gallery-22.jpeg";
import gallery23 from "@/assets/beyondThespace/gallery-23.jpeg";
import gallery24 from "@/assets/beyondThespace/gallery-24.jpeg";
import gallery25 from "@/assets/beyondThespace/gallery-25.jpeg";
import gallery26 from "@/assets/beyondThespace/gallery-26.jpeg";
import gallery27 from "@/assets/beyondThespace/gallery-27.jpeg";
import gallery28 from "@/assets/beyondThespace/gallery-28.jpeg";
import gallery29 from "@/assets/beyondThespace/gallery-29.jpeg";
import gallery30 from "@/assets/beyondThespace/gallery-30.jpeg";
import gallery31 from "@/assets/beyondThespace/gallery-31.jpeg";
import gallery32 from "@/assets/beyondThespace/gallery-32.jpeg";
import gallery33 from "@/assets/beyondThespace/gallery-33.jpeg";



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
gallery29,
gallery30,
gallery31,
gallery32,
gallery33
];

const BeyondTheSpace = () => {

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
         Beyond The Space Pre-Wedding <span className="text-gold">Gallery</span>
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
          fetchPriority={i < 4 ? "high" : "low"}
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

export default BeyondTheSpace;