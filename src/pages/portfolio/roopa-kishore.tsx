import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

import gallery1 from "@/assets/kishore-roopa/gallery-01.jpg";
import gallery2 from "@/assets/kishore-roopa/gallery-02.jpg";
import gallery3 from "@/assets/kishore-roopa/gallery-03.jpg";
import gallery4 from "@/assets/kishore-roopa/gallery-04.jpg";
import gallery5 from "@/assets/kishore-roopa/gallery-05.jpg";
import gallery6 from "@/assets/kishore-roopa/gallery-06.jpg";
import gallery7 from "@/assets/kishore-roopa/gallery-07.jpg";
import gallery8 from "@/assets/kishore-roopa/gallery-08.jpg";
import gallery9 from "@/assets/kishore-roopa/gallery-09.jpg";

import gallery10 from "@/assets/kishore-roopa/gallery-010.jpg";
import gallery11 from "@/assets/kishore-roopa/gallery-011.jpg";
import gallery12 from "@/assets/kishore-roopa/gallery-012.jpg";
import gallery13 from "@/assets/kishore-roopa/gallery-013.jpg";
import gallery14 from "@/assets/kishore-roopa/gallery-014.jpg";
import gallery15 from "@/assets/kishore-roopa/gallery-015.jpg";
import gallery16 from "@/assets/kishore-roopa/gallery-016.jpg";
import gallery17 from "@/assets/kishore-roopa/gallery-017.jpg";
import gallery18 from "@/assets/kishore-roopa/gallery-018.jpg";
import gallery19 from "@/assets/kishore-roopa/gallery-019.jpg";

import gallery20 from "@/assets/kishore-roopa/gallery-020.jpg";
import gallery21 from "@/assets/kishore-roopa/gallery-021.jpg";
import gallery22 from "@/assets/kishore-roopa/gallery-022.jpg";
import gallery23 from "@/assets/kishore-roopa/gallery-023.jpg";
import gallery24 from "@/assets/kishore-roopa/gallery-024.jpg";
import gallery25 from "@/assets/kishore-roopa/gallery-025.jpg";
import gallery26 from "@/assets/kishore-roopa/gallery-026.jpg";
import gallery27 from "@/assets/kishore-roopa/gallery-027.jpg";
import gallery28 from "@/assets/kishore-roopa/gallery-028.jpg";
import gallery29 from "@/assets/kishore-roopa/gallery-029.jpg";

import gallery30 from "@/assets/kishore-roopa/gallery-030.jpg";
import gallery31 from "@/assets/kishore-roopa/gallery-031.jpg";
import gallery32 from "@/assets/kishore-roopa/gallery-032.jpg";
import gallery33 from "@/assets/kishore-roopa/gallery-033.jpg";
import gallery34 from "@/assets/kishore-roopa/gallery-034.jpg";
import gallery35 from "@/assets/kishore-roopa/gallery-035.jpg";
import gallery36 from "@/assets/kishore-roopa/gallery-036.jpg";
import gallery37 from "@/assets/kishore-roopa/gallery-037.jpg";
import gallery38 from "@/assets/kishore-roopa/gallery-038.jpg";
import gallery39 from "@/assets/kishore-roopa/gallery-039.jpg";

import gallery40 from "@/assets/kishore-roopa/gallery-040.jpg";
import gallery41 from "@/assets/kishore-roopa/gallery-041.jpg";
import gallery42 from "@/assets/kishore-roopa/gallery-042.jpg";
import gallery43 from "@/assets/kishore-roopa/gallery-043.jpg";
import gallery44 from "@/assets/kishore-roopa/gallery-044.jpg";
import gallery45 from "@/assets/kishore-roopa/gallery-045.jpg";
import gallery46 from "@/assets/kishore-roopa/gallery-046.jpg";
import gallery47 from "@/assets/kishore-roopa/gallery-047.jpg";
import gallery48 from "@/assets/kishore-roopa/gallery-048.jpg";
import gallery49 from "@/assets/kishore-roopa/gallery-049.jpg";

import gallery50 from "@/assets/kishore-roopa/gallery-050.jpg";
import gallery51 from "@/assets/kishore-roopa/gallery-051.jpg";
import gallery52 from "@/assets/kishore-roopa/gallery-052.jpg";
import gallery53 from "@/assets/kishore-roopa/gallery-053.jpg";
import gallery54 from "@/assets/kishore-roopa/gallery-054.jpg";
import gallery55 from "@/assets/kishore-roopa/gallery-055.jpg";
import gallery56 from "@/assets/kishore-roopa/gallery-056.jpg";
import gallery57 from "@/assets/kishore-roopa/gallery-057.jpg";
import gallery58 from "@/assets/kishore-roopa/gallery-058.jpg";
import gallery59 from "@/assets/kishore-roopa/gallery-059.jpg";

import gallery60 from "@/assets/kishore-roopa/gallery-060.jpg";
import gallery61 from "@/assets/kishore-roopa/gallery-061.jpg";
import gallery62 from "@/assets/kishore-roopa/gallery-062.jpg";
import gallery63 from "@/assets/kishore-roopa/gallery-063.jpg";
import gallery64 from "@/assets/kishore-roopa/gallery-064.jpg";
import gallery65 from "@/assets/kishore-roopa/gallery-065.jpg";
import gallery66 from "@/assets/kishore-roopa/gallery-066.jpg";
import gallery67 from "@/assets/kishore-roopa/gallery-067.jpg";
import gallery68 from "@/assets/kishore-roopa/gallery-068.jpg";
import gallery69 from "@/assets/kishore-roopa/gallery-069.jpg";

import gallery70 from "@/assets/kishore-roopa/gallery-070.jpg";
import gallery71 from "@/assets/kishore-roopa/gallery-071.jpg";
import gallery72 from "@/assets/kishore-roopa/gallery-072.jpg";
import gallery73 from "@/assets/kishore-roopa/gallery-073.jpg";
import gallery74 from "@/assets/kishore-roopa/gallery-074.jpg";
import gallery75 from "@/assets/kishore-roopa/gallery-075.jpg";
import gallery76 from "@/assets/kishore-roopa/gallery-076.jpg";
import gallery77 from "@/assets/kishore-roopa/gallery-077.jpg";

const images = [
gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10,
gallery11,gallery12,gallery13,gallery14,gallery15,gallery16,gallery17,gallery18,gallery19,gallery20,
gallery21,gallery22,gallery23,gallery24,gallery25,gallery26,gallery27,gallery28,gallery29,gallery30,
gallery31,gallery32,gallery33,gallery34,gallery35,gallery36,gallery37,gallery38,gallery39,gallery40,
gallery41,gallery42,gallery43,gallery44,gallery45,gallery46,gallery47,gallery48,gallery49,gallery50,
gallery51,gallery52,gallery53,gallery54,gallery55,gallery56,gallery57,gallery58,gallery59,gallery60,
gallery61,gallery62,gallery63,gallery64,gallery65,gallery66,gallery67,gallery68,gallery69,gallery70,
gallery71,gallery72,gallery73,gallery74,gallery75,gallery76,gallery77
];

const PortfolioGallery1 = () => {

const [selected,setSelected] = useState<string | null>(null);

return (
<>
<TopHeader />
<Navbar />

<section className="py-36 bg-background">

<div className="container mx-auto px-6">

<div className="text-center mb-24">

<p className="text-gold uppercase tracking-[8px] text-xs mb-4">
RJ Events
</p>

<h1 className="font-heading text-4xl md:text-6xl leading-tight">
Wedding <span className="text-gold">Gallery</span>
</h1>

<div className="w-24 h-[2px] bg-gold mx-auto mt-6"></div>

<p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
A glimpse into the unforgettable celebrations we have crafted
with passion, elegance, and timeless beauty.
</p>

</div>

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
viewport={{ once: true }}
transition={{ duration: 0.5 }}
style={{ contentVisibility: "auto" }}
className={`relative overflow-hidden cursor-pointer group ${span}`}
onClick={() => setSelected(img)}
>

<img
src={img}
loading={i < 6 ? "eager" : "lazy"}
decoding="async"
fetchPriority={i < 6 ? "high" : "auto"}
className="w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
/>

<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>

<div className="absolute inset-0 border border-transparent group-hover:border-gold/50 transition duration-700"></div>

<div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/70 transition duration-700"></div>

<div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/70 transition duration-700"></div>

</motion.div>

);

})}

</div>

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
        "https://www.youtube.com/watch?v=CYBlnM_SY78",
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
<Footer />
<FloatingContact />

</>
);
};

export default PortfolioGallery1;