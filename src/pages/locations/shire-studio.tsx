import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import gallery1 from "@/assets/shire-studio/gallery-01.jpg";
import gallery2 from "@/assets/shire-studio/gallery-02.jpg";
import gallery3 from "@/assets/shire-studio/gallery-03.jpg";
import gallery4 from "@/assets/shire-studio/gallery-04.jpg";
import gallery5 from "@/assets/shire-studio/gallery-05.jpg";
import gallery6 from "@/assets/shire-studio/gallery-06.jpg";
import gallery7 from "@/assets/shire-studio/gallery-07.jpg";
import gallery8 from "@/assets/shire-studio/gallery-08.jpg";
import gallery9 from "@/assets/shire-studio/gallery-09.jpg";
import gallery10 from "@/assets/shire-studio/gallery-10.jpg";
import gallery11 from "@/assets/shire-studio/gallery-11.jpg";
import gallery12 from "@/assets/shire-studio/gallery-12.jpg";
import gallery13 from "@/assets/shire-studio/gallery-13.jpg";
import gallery14 from "@/assets/shire-studio/gallery-14.jpg";
import gallery15 from "@/assets/shire-studio/gallery-15.jpg";
import gallery16 from "@/assets/shire-studio/gallery-16.jpg";
import gallery17 from "@/assets/shire-studio/gallery-17.jpg";
import gallery18 from "@/assets/shire-studio/gallery-18.jpg";
import gallery19 from "@/assets/shire-studio/gallery-19.jpg";
import gallery20 from "@/assets/shire-studio/gallery-20.jpg";
import gallery21 from "@/assets/shire-studio/gallery-21.jpg";
import gallery22 from "@/assets/shire-studio/gallery-22.jpg";
import gallery23 from "@/assets/shire-studio/gallery-23.jpg";
import gallery24 from "@/assets/shire-studio/gallery-24.jpg";
import gallery25 from "@/assets/shire-studio/gallery-25.jpg";
import gallery26 from "@/assets/shire-studio/gallery-26.jpg";
import gallery27 from "@/assets/shire-studio/gallery-27.jpg";
import gallery28 from "@/assets/shire-studio/gallery-28.jpg";
import gallery29 from "@/assets/shire-studio/gallery-29.jpg";
import gallery30 from "@/assets/shire-studio/gallery-30.jpg";
import gallery31 from "@/assets/shire-studio/gallery-31.jpg";
import gallery32 from "@/assets/shire-studio/gallery-32.jpg";
import gallery33 from "@/assets/shire-studio/gallery-33.jpg";
import gallery34 from "@/assets/shire-studio/gallery-34.jpg";
import gallery35 from "@/assets/shire-studio/gallery-35.jpg";
import gallery36 from "@/assets/shire-studio/gallery-36.jpg";
import gallery37 from "@/assets/shire-studio/gallery-37.jpg";
import gallery38 from "@/assets/shire-studio/gallery-38.jpg";
import gallery39 from "@/assets/shire-studio/gallery-39.jpg";
import gallery40 from "@/assets/shire-studio/gallery-40.jpg";
import gallery41 from "@/assets/shire-studio/gallery-41.jpg";
import gallery42 from "@/assets/shire-studio/gallery-42.jpg";
import gallery43 from "@/assets/shire-studio/gallery-43.jpg";
import gallery44 from "@/assets/shire-studio/gallery-44.jpg";
import gallery45 from "@/assets/shire-studio/gallery-45.jpg";
import gallery46 from "@/assets/shire-studio/gallery-46.jpg";
import gallery47 from "@/assets/shire-studio/gallery-47.jpg";
import gallery48 from "@/assets/shire-studio/gallery-48.jpg";
import gallery49 from "@/assets/shire-studio/gallery-49.jpg";
import gallery50 from "@/assets/shire-studio/gallery-50.jpg";
import gallery51 from "@/assets/shire-studio/gallery-51.jpg";
import gallery52 from "@/assets/shire-studio/gallery-52.jpg";
import gallery53 from "@/assets/shire-studio/gallery-53.jpg";
import gallery54 from "@/assets/shire-studio/gallery-54.jpg";
import gallery55 from "@/assets/shire-studio/gallery-55.jpg";
import gallery56 from "@/assets/shire-studio/gallery-56.jpg";
import gallery57 from "@/assets/shire-studio/gallery-57.jpg";
import gallery58 from "@/assets/shire-studio/gallery-58.jpg";
import gallery59 from "@/assets/shire-studio/gallery-59.jpg";
import gallery60 from "@/assets/shire-studio/gallery-60.jpg";
import gallery61 from "@/assets/shire-studio/gallery-61.jpg";


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
gallery33,
gallery34,
gallery35,
gallery36,
gallery37,
gallery38,
gallery39,
gallery40,
gallery41,
gallery42,
gallery43,
gallery44,
gallery45,
gallery46,
gallery47,
gallery48,
gallery49,
gallery50,
gallery51,
gallery52,
gallery53,
gallery54,
gallery55,
gallery56,
gallery57,
gallery58,
gallery59,
gallery60,
gallery61
];

const Shirestudio = () => {

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
        Shire Studio Pre-Wedding <span className="text-gold">Gallery</span>
      </h1>

      <div className="w-24 h-[2px] bg-gold mx-auto mt-6"></div>

      <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
        A glimpse into the unforgettable celebrations we have crafted
        with passion, elegance, and timeless beauty.
      </p>

    </div>


    {/* Luxury Editorial Grid */}
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

export default Shirestudio;