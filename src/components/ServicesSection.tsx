import { motion } from "framer-motion";
import serviceDecoration from "@/assets/decoration-service.jpg";
import servicePhotography from "@/assets/photography-service.jpg";
import serviceCatering from "@/assets/catering-service.webp";

const services = [
  {
    title: "Decoration",
    description:
      "Elegant floral concepts, stage design, and venue styling crafted to reflect your vision.",
    image: serviceDecoration,
  },
  {
    title: "Photography",
    description:
      "Cinematic storytelling and timeless photography that captures emotions beautifully.",
    image: servicePhotography,
  },
  {
    title: "Catering",
    description:
      "Refined menus and exceptional hospitality that leave a lasting impression on your guests.",
    image: serviceCatering,
  },
];

const ServicesSection = () => {
  return (
<section id="services" className="pt-4 pb-4 bg-background">
      <div className="container mx-auto px-6">

        {/* ================= OUR SERVICES ================= */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Our <span className="gold">Services</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-6"></div>
        </motion.div>

        {/* Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative h-[480px] rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-10 left-0 right-0 text-center px-6">
                <h3 className="font-heading text-2xl text-white mb-4 tracking-wide">
                  {service.title}
                </h3>

                <div className="w-16 h-[1px] bg-gold mx-auto mb-4 transition-all duration-500 group-hover:w-24" />

                <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;