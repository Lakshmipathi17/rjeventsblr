import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import client1 from "@/assets/gallery-1.jpg";
import client2 from "@/assets/gallery-13.png";
import client3 from "@/assets/natural-locations/gallery-8.jpg";

const testimonials = [
  {
    name: "Roopa & Kishore",
    event: "Wedding",
    image: client1,
    text: "RJ Events turned our dream wedding into reality. Every detail was handled with elegance and perfection. Our guests are still talking about the décor and flawless execution.",
  },
  {
    name: "Kavya & Mahendra",
    event: "Wedding",
    image: client2,
    text: "From photography to catering, everything was seamless. The team understood our vision and delivered beyond expectations. Truly a magical experience.",
  },
  {
    name: "Vindhyashree & PavanKumar",
    event: "Wedding",
    image: client3,
    text: "The decoration and arrangements were stunning. RJ Events made my celebration unforgettable. Highly recommended for anyone looking for perfection.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-muted/40 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="section-heading">
            What Our <span className="gold">Clients Say</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-6"></div>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto min-h-[380px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="px-6"
            >

              {/* Profile Image with Premium Glow */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-28 h-28 mx-auto mb-8"
              >
                <div className="absolute inset-0 rounded-full bg-gold/30 blur-2xl opacity-40"></div>
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-gold shadow-xl"
                />
              </motion.div>

              {/* Quote */}
              <p className="text-xl md:text-2xl font-heading leading-relaxed text-foreground mb-10">
                “{testimonials[current].text}”
              </p>

              {/* Name & Event */}
              <div>
                <p className="font-heading text-lg text-gold">
                  {testimonials[current].name}
                </p>
                <p className="text-muted-foreground text-sm tracking-widest uppercase mt-1">
                  {testimonials[current].event}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                current === i
                  ? "w-8 h-2 bg-gold"
                  : "w-2 h-2 bg-foreground/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;