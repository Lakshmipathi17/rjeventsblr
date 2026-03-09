import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

import gallery1 from "@/assets/natural-locations/gallery-1.jpg";
import gallery2 from "@/assets/natural-locations/gallery-2.jpg";
import gallery3 from "@/assets/natural-locations/gallery-3.jpg";
import gallery4 from "@/assets/natural-locations/gallery-4.jpg";
import gallery5 from "@/assets/natural-locations/gallery-5.jpg";
import gallery6 from "@/assets/natural-locations/gallery-6.jpg";
import gallery7 from "@/assets/natural-locations/gallery-7.jpg";
import gallery8 from "@/assets/natural-locations/gallery-8.jpg";
import gallery9 from "@/assets/natural-locations/gallery-9.jpg";
import gallery10 from "@/assets/natural-locations/gallery-10.jpg";
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
import gallery35 from "@/assets/natural-locations/gallery-35.jpg";
import gallery36 from "@/assets/natural-locations/gallery-36.jpg";
import gallery37 from "@/assets/natural-locations/gallery-37.jpg";
import gallery38 from "@/assets/natural-locations/gallery-38.jpg";
import gallery39 from "@/assets/natural-locations/gallery-39.jpg";
import gallery40 from "@/assets/natural-locations/gallery-40.jpg";
import gallery41 from "@/assets/natural-locations/gallery-41.jpg";
import gallery42 from "@/assets/natural-locations/gallery-42.jpg";
import gallery43 from "@/assets/natural-locations/gallery-43.jpg";
import gallery44 from "@/assets/natural-locations/gallery-44.jpg";
import gallery45 from "@/assets/natural-locations/gallery-45.jpg";
import gallery46 from "@/assets/natural-locations/gallery-46.jpg";
import gallery47 from "@/assets/natural-locations/gallery-47.jpg";
import gallery48 from "@/assets/natural-locations/gallery-48.jpg";
import gallery49 from "@/assets/natural-locations/gallery-49.jpg";
import gallery50 from "@/assets/natural-locations/gallery-50.jpg";
import gallery51 from "@/assets/natural-locations/gallery-51.jpg";
import gallery52 from "@/assets/natural-locations/gallery-52.jpg";
import gallery53 from "@/assets/natural-locations/gallery-53.jpg";
import gallery54 from "@/assets/natural-locations/gallery-54.jpg";
import gallery55 from "@/assets/natural-locations/gallery-55.jpg";
import gallery56 from "@/assets/natural-locations/gallery-56.jpg";
import gallery57 from "@/assets/natural-locations/gallery-57.jpg";
import gallery58 from "@/assets/natural-locations/gallery-58.jpg";
import gallery59 from "@/assets/natural-locations/gallery-59.jpg";
import gallery60 from "@/assets/natural-locations/gallery-60.jpg";
import gallery61 from "@/assets/natural-locations/gallery-61.jpg";
import gallery62 from "@/assets/natural-locations/gallery-62.jpg";
import gallery63 from "@/assets/natural-locations/gallery-63.jpg";
import gallery64 from "@/assets/natural-locations/gallery-64.jpg";
import gallery65 from "@/assets/natural-locations/gallery-65.jpg";
import gallery66 from "@/assets/natural-locations/gallery-66.jpg";
import gallery67 from "@/assets/natural-locations/gallery-67.jpg";
import gallery68 from "@/assets/natural-locations/gallery-68.jpg";
import gallery69 from "@/assets/natural-locations/gallery-69.jpg";
import gallery70 from "@/assets/natural-locations/gallery-70.jpg";
import gallery71 from "@/assets/natural-locations/gallery-71.jpg";
import gallery72 from "@/assets/natural-locations/gallery-72.jpg";
import gallery73 from "@/assets/natural-locations/gallery-73.jpg";
import gallery74 from "@/assets/natural-locations/gallery-74.jpg";
import gallery75 from "@/assets/natural-locations/gallery-75.jpg";
import gallery76 from "@/assets/natural-locations/gallery-76.jpg";
import gallery77 from "@/assets/natural-locations/gallery-77.jpg";
import gallery78 from "@/assets/natural-locations/gallery-78.jpg";
import gallery79 from "@/assets/natural-locations/gallery-79.jpg";
import gallery80 from "@/assets/natural-locations/gallery-80.jpg";
import gallery81 from "@/assets/natural-locations/gallery-81.jpg";
import gallery82 from "@/assets/natural-locations/gallery-82.jpg";
import gallery83 from "@/assets/natural-locations/gallery-83.jpg";
import gallery84 from "@/assets/natural-locations/gallery-84.jpg";
import gallery85 from "@/assets/natural-locations/gallery-85.jpg";
import gallery86 from "@/assets/natural-locations/gallery-86.jpg";
import gallery87 from "@/assets/natural-locations/gallery-87.jpg";
import gallery88 from "@/assets/natural-locations/gallery-88.jpg";
import gallery89 from "@/assets/natural-locations/gallery-89.jpg";
import gallery90 from "@/assets/natural-locations/gallery-90.jpg";
import gallery91 from "@/assets/natural-locations/gallery-91.jpg";
import gallery92 from "@/assets/natural-locations/gallery-92.jpg";
import gallery93 from "@/assets/natural-locations/gallery-93.jpg";
import gallery94 from "@/assets/natural-locations/gallery-94.jpg";
import gallery95 from "@/assets/natural-locations/gallery-95.jpg";
import gallery96 from "@/assets/natural-locations/gallery-96.jpg";
import gallery97 from "@/assets/natural-locations/gallery-97.jpg";
import gallery98 from "@/assets/natural-locations/gallery-98.jpg";
import gallery99 from "@/assets/natural-locations/gallery-99.jpg";
import gallery100 from "@/assets/natural-locations/gallery-100.jpg";
import gallery101 from "@/assets/natural-locations/gallery-101.jpg";
import gallery102 from "@/assets/natural-locations/gallery-102.jpg";
import gallery103 from "@/assets/natural-locations/gallery-103.jpg";
import gallery104 from "@/assets/natural-locations/gallery-104.jpg";
import gallery105 from "@/assets/natural-locations/gallery-105.jpg";
import gallery106 from "@/assets/natural-locations/gallery-106.jpg";
import gallery107 from "@/assets/natural-locations/gallery-107.jpg";
import gallery108 from "@/assets/natural-locations/gallery-108.jpg";
import gallery109 from "@/assets/natural-locations/gallery-109.jpg";
import gallery110 from "@/assets/natural-locations/gallery-110.jpg";
import gallery111 from "@/assets/natural-locations/gallery-111.jpg";
import gallery112 from "@/assets/natural-locations/gallery-112.jpg";
import gallery113 from "@/assets/natural-locations/gallery-113.jpg";
import gallery114 from "@/assets/natural-locations/gallery-114.jpg";
import gallery115 from "@/assets/natural-locations/gallery-115.jpg";
import gallery116 from "@/assets/natural-locations/gallery-116.jpg";
import gallery117 from "@/assets/natural-locations/gallery-117.jpg";


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
gallery61,
gallery62,
gallery63,
gallery64,
gallery65,
gallery66,
gallery67,
gallery68,
gallery69,
gallery70,
gallery71,
gallery72,
gallery73,
gallery74,
gallery75,
gallery76,
gallery77,
gallery78,
gallery79,
gallery80,
gallery81,
gallery82,
gallery83,
gallery84,
gallery85,
gallery86,
gallery87,
gallery88,
gallery89,
gallery90,
gallery91,
gallery92,
gallery93,
gallery94,
gallery95,
gallery96,
gallery97,
gallery98,
gallery99,
gallery100,
gallery101,
gallery102,
gallery103,
gallery104,
gallery105,
gallery106,
gallery107,
gallery108,
gallery109,
gallery110,
gallery111,
gallery112,
gallery113,
gallery114,
gallery115,
gallery116,
gallery117
];

const Naturallocations = () => {

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
        Naural Locations Pre-Wedding <span className="text-gold">Gallery</span>
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

export default Naturallocations;