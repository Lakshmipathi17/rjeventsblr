import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
import gallery12 from "@/assets/natural-locations/gallery-1.jpg";
import gallery13 from "@/assets/natural-locations/gallery-2.jpg";
import gallery14 from "@/assets/natural-locations/gallery-3.jpg";
import gallery15 from "@/assets/natural-locations/gallery-4.jpg";
import gallery16 from "@/assets/decoration-1.jpg";
import gallery17 from "@/assets/natural-locations/gallery-6.jpg";
import gallery18 from "@/assets/natural-locations/gallery-7.jpg";
import gallery19 from "@/assets/natural-locations/gallery-8.jpg";
import gallery20 from "@/assets/natural-locations/gallery-5.jpg";
import gallery21 from "@/assets/natural-locations/gallery-9.jpg";

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
  { src: gallery13, alt: "bride single8", position: "object-center" },
  { src: gallery14, alt: "bride single9", position: "object-center" },
  { src: gallery15, alt: "bride single10", position: "object-center" },
  { src: gallery16, alt: "decoration", position: "object-center" },
  { src: gallery17, alt: "bride single12", position: "object-center" },
  { src: gallery18, alt: "bride single13", position: "object-center" },
  { src: gallery19, alt: "bride single14", position: "object-center" },
  { src: gallery20, alt: "bride single15", position: "object-center" },
  { src: gallery21, alt: "bride single16", position: "object-center" }
];

const GallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Photo <span className="gold">Gallery</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-6"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto font-body">
            A glimpse into the celebrations we've brought to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => {

            const pattern = i % 6;
            let spanClass = "";

            if (pattern === 0) spanClass = "md:col-span-2 md:row-span-2";
            else if (pattern === 3) spanClass = "md:col-span-2";

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
                  fetchpriority={i < 4 ? "high" : "low"}
                  className={`w-full h-full object-cover ${img.position || "object-center"} transition-transform duration-[600ms] group-hover:scale-105 will-change-transform`}
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

                <div className="absolute inset-0 border border-transparent group-hover:border-gold/60 transition-all duration-500 pointer-events-none" />

              </motion.div>
            );
          })}
        </div>

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
  );
};

export default GallerySection;