import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

import gallery1 from "@/assets/vindhyashree-pavankumar/gallery-01.jpg";
import gallery2 from "@/assets/vindhyashree-pavankumar/gallery-02.jpg";
import gallery3 from "@/assets/vindhyashree-pavankumar/gallery-03.jpg";
import gallery4 from "@/assets/vindhyashree-pavankumar/gallery-04.jpg";
import gallery5 from "@/assets/vindhyashree-pavankumar/gallery-05.jpg";
import gallery6 from "@/assets/vindhyashree-pavankumar/gallery-06.jpg";
import gallery7 from "@/assets/vindhyashree-pavankumar/gallery-07.jpg";
import gallery8 from "@/assets/vindhyashree-pavankumar/gallery-08.jpg";
import gallery9 from "@/assets/vindhyashree-pavankumar/gallery-09.jpg";

import gallery10 from "@/assets/vindhyashree-pavankumar/gallery-010.jpg";
import gallery11 from "@/assets/vindhyashree-pavankumar/gallery-011.jpg";
import gallery12 from "@/assets/vindhyashree-pavankumar/gallery-012.jpg";
import gallery13 from "@/assets/vindhyashree-pavankumar/gallery-013.jpg";
import gallery14 from "@/assets/vindhyashree-pavankumar/gallery-014.jpg";
import gallery15 from "@/assets/vindhyashree-pavankumar/gallery-015.jpg";
import gallery16 from "@/assets/vindhyashree-pavankumar/gallery-016.jpg";
import gallery17 from "@/assets/vindhyashree-pavankumar/gallery-017.jpg";
import gallery18 from "@/assets/vindhyashree-pavankumar/gallery-018.jpg";
import gallery19 from "@/assets/vindhyashree-pavankumar/gallery-019.jpg";

import gallery20 from "@/assets/vindhyashree-pavankumar/gallery-020.jpg";
import gallery21 from "@/assets/vindhyashree-pavankumar/gallery-021.jpg";
import gallery22 from "@/assets/vindhyashree-pavankumar/gallery-022.jpg";
import gallery23 from "@/assets/vindhyashree-pavankumar/gallery-023.jpg";
import gallery24 from "@/assets/vindhyashree-pavankumar/gallery-024.jpg";
import gallery25 from "@/assets/vindhyashree-pavankumar/gallery-025.jpg";
import gallery26 from "@/assets/vindhyashree-pavankumar/gallery-026.jpg";
import gallery27 from "@/assets/vindhyashree-pavankumar/gallery-027.jpg";
import gallery28 from "@/assets/vindhyashree-pavankumar/gallery-028.jpg";
import gallery29 from "@/assets/vindhyashree-pavankumar/gallery-029.jpg";

import gallery30 from "@/assets/vindhyashree-pavankumar/gallery-030.jpg";
import gallery31 from "@/assets/vindhyashree-pavankumar/gallery-031.jpg";
import gallery32 from "@/assets/vindhyashree-pavankumar/gallery-032.jpg";
import gallery33 from "@/assets/vindhyashree-pavankumar/gallery-033.jpg";
import gallery34 from "@/assets/vindhyashree-pavankumar/gallery-034.jpg";
import gallery35 from "@/assets/vindhyashree-pavankumar/gallery-035.jpg";
import gallery36 from "@/assets/vindhyashree-pavankumar/gallery-036.jpg";
import gallery37 from "@/assets/vindhyashree-pavankumar/gallery-037.jpg";
import gallery38 from "@/assets/vindhyashree-pavankumar/gallery-038.jpg";
import gallery39 from "@/assets/vindhyashree-pavankumar/gallery-039.jpg";

import gallery40 from "@/assets/vindhyashree-pavankumar/gallery-040.jpg";
import gallery41 from "@/assets/vindhyashree-pavankumar/gallery-041.jpg";
import gallery42 from "@/assets/vindhyashree-pavankumar/gallery-042.jpg";
import gallery43 from "@/assets/vindhyashree-pavankumar/gallery-043.jpg";
import gallery44 from "@/assets/vindhyashree-pavankumar/gallery-044.jpg";
import gallery45 from "@/assets/vindhyashree-pavankumar/gallery-045.jpg";
import gallery46 from "@/assets/vindhyashree-pavankumar/gallery-046.jpg";
import gallery47 from "@/assets/vindhyashree-pavankumar/gallery-047.jpg";
import gallery48 from "@/assets/vindhyashree-pavankumar/gallery-048.jpg";
import gallery49 from "@/assets/vindhyashree-pavankumar/gallery-049.jpg";

import gallery50 from "@/assets/vindhyashree-pavankumar/gallery-050.jpg";
import gallery51 from "@/assets/vindhyashree-pavankumar/gallery-051.jpg";
import gallery52 from "@/assets/vindhyashree-pavankumar/gallery-052.jpg";
import gallery53 from "@/assets/vindhyashree-pavankumar/gallery-053.jpg";
import gallery54 from "@/assets/vindhyashree-pavankumar/gallery-054.jpg";
import gallery55 from "@/assets/vindhyashree-pavankumar/gallery-055.jpg";
import gallery56 from "@/assets/vindhyashree-pavankumar/gallery-056.jpg";
import gallery57 from "@/assets/vindhyashree-pavankumar/gallery-057.jpg";
import gallery58 from "@/assets/vindhyashree-pavankumar/gallery-058.jpg";
import gallery59 from "@/assets/vindhyashree-pavankumar/gallery-059.jpg";

import gallery60 from "@/assets/vindhyashree-pavankumar/gallery-060.jpg";
import gallery61 from "@/assets/vindhyashree-pavankumar/gallery-061.jpg";
import gallery62 from "@/assets/vindhyashree-pavankumar/gallery-062.jpg";
import gallery63 from "@/assets/vindhyashree-pavankumar/gallery-063.jpg";
import gallery64 from "@/assets/vindhyashree-pavankumar/gallery-064.jpg";
import gallery65 from "@/assets/vindhyashree-pavankumar/gallery-065.jpg";
import gallery66 from "@/assets/vindhyashree-pavankumar/gallery-066.jpg";
import gallery67 from "@/assets/vindhyashree-pavankumar/gallery-067.jpg";
import gallery68 from "@/assets/vindhyashree-pavankumar/gallery-068.jpg";
import gallery69 from "@/assets/vindhyashree-pavankumar/gallery-069.jpg";

import gallery70 from "@/assets/vindhyashree-pavankumar/gallery-070.jpg";
import gallery71 from "@/assets/vindhyashree-pavankumar/gallery-071.jpg";
import gallery72 from "@/assets/vindhyashree-pavankumar/gallery-072.jpg";
import gallery73 from "@/assets/vindhyashree-pavankumar/gallery-073.jpg";
import gallery74 from "@/assets/vindhyashree-pavankumar/gallery-074.jpg";
import gallery75 from "@/assets/vindhyashree-pavankumar/gallery-075.jpg";
import gallery76 from "@/assets/vindhyashree-pavankumar/gallery-076.jpg";
import gallery77 from "@/assets/vindhyashree-pavankumar/gallery-077.jpg";

import gallery78 from "@/assets/vindhyashree-pavankumar/gallery-078.jpg";
import gallery79 from "@/assets/vindhyashree-pavankumar/gallery-079.jpg";

import gallery80 from "@/assets/vindhyashree-pavankumar/gallery-080.jpg";
import gallery81 from "@/assets/vindhyashree-pavankumar/gallery-081.jpg";
import gallery82 from "@/assets/vindhyashree-pavankumar/gallery-082.jpg";
import gallery83 from "@/assets/vindhyashree-pavankumar/gallery-083.jpg";
import gallery84 from "@/assets/vindhyashree-pavankumar/gallery-084.jpg";
import gallery85 from "@/assets/vindhyashree-pavankumar/gallery-085.jpg";
import gallery86 from "@/assets/vindhyashree-pavankumar/gallery-086.jpg";
import gallery87 from "@/assets/vindhyashree-pavankumar/gallery-087.jpg";
import gallery88 from "@/assets/vindhyashree-pavankumar/gallery-088.jpg";
import gallery89 from "@/assets/vindhyashree-pavankumar/gallery-089.jpg";

import gallery90 from "@/assets/vindhyashree-pavankumar/gallery-090.jpg";
import gallery91 from "@/assets/vindhyashree-pavankumar/gallery-091.jpg";
import gallery92 from "@/assets/vindhyashree-pavankumar/gallery-092.jpg";
import gallery93 from "@/assets/vindhyashree-pavankumar/gallery-093.jpg";
import gallery94 from "@/assets/vindhyashree-pavankumar/gallery-094.jpg";
import gallery95 from "@/assets/vindhyashree-pavankumar/gallery-095.jpg";
import gallery96 from "@/assets/vindhyashree-pavankumar/gallery-096.jpg";
import gallery97 from "@/assets/vindhyashree-pavankumar/gallery-097.jpg";
import gallery98 from "@/assets/vindhyashree-pavankumar/gallery-098.jpg";
import gallery99 from "@/assets/vindhyashree-pavankumar/gallery-099.jpg";

import gallery100 from "@/assets/vindhyashree-pavankumar/gallery-0100.jpg";
import gallery101 from "@/assets/vindhyashree-pavankumar/gallery-0101.jpg";
import gallery102 from "@/assets/vindhyashree-pavankumar/gallery-0102.jpg";
import gallery103 from "@/assets/vindhyashree-pavankumar/gallery-0103.jpg";
import gallery104 from "@/assets/vindhyashree-pavankumar/gallery-0104.jpg";
import gallery105 from "@/assets/vindhyashree-pavankumar/gallery-0105.jpg";
import gallery106 from "@/assets/vindhyashree-pavankumar/gallery-0106.jpg";
import gallery107 from "@/assets/vindhyashree-pavankumar/gallery-0107.jpg";

const images = [
gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10,
gallery11,gallery12,gallery13,gallery14,gallery15,gallery16,gallery17,gallery18,gallery19,gallery20,
gallery21,gallery22,gallery23,gallery24,gallery25,gallery26,gallery27,gallery28,gallery29,gallery30,
gallery31,gallery32,gallery33,gallery34,gallery35,gallery36,gallery37,gallery38,gallery39,gallery40,
gallery41,gallery42,gallery43,gallery44,gallery45,gallery46,gallery47,gallery48,gallery49,gallery50,
gallery51,gallery52,gallery53,gallery54,gallery55,gallery56,gallery57,gallery58,gallery59,gallery60,
gallery61,gallery62,gallery63,gallery64,gallery65,gallery66,gallery67,gallery68,gallery69,gallery70,
gallery71,gallery72,gallery73,gallery74,gallery75,gallery76,gallery77,gallery78,gallery79,gallery80,gallery81,gallery82,gallery83,gallery84,gallery85,gallery86,gallery87,gallery88,gallery89,gallery90,gallery91,gallery92,gallery93,gallery94,gallery95,gallery96,gallery97,gallery98,gallery99,
gallery100,gallery101,gallery102,gallery103,gallery104,gallery105,gallery106,gallery107
];

const PortfolioGallery2 = () => {

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
        "https://www.youtube.com/watch?v=AeeSLQUhNlM",
        "https://www.youtube.com/watch?v=rgYt4Lc6az0",
        "https://www.youtube.com/watch?v=6MP75GZsNdA"
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

export default PortfolioGallery2;