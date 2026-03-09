import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import hero from "@/assets/portfolio-hero.jpg";
import couple1 from "@/assets/gallery-1.jpg";
import couple2 from "@/assets/vindhyashree-pavankumar/gallery-01.jpg";
import couple3 from "@/assets/gallery-3.jpg";

const portfolio = [
  {
    couple: "Roopa & Kishore",
    location: "Bangalore",
    image: couple1,
    gallery: "/portfolio/roopa-kishore"
  },
  {
    couple: "Vindhyashree & Pavankumar",
    location: "Chickkaballapur",
    image: couple2,
    gallery: "/portfolio/vindhyashree-pavankumar"
  }
];

const PortfolioPage = () => {
  return (
    <>
      <TopHeader />
      <Navbar />

      <div className="bg-background">

        {/* HERO */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

          {/* Background Image */}
          <img
            src={hero}
            className="absolute inset-0 w-full h-full object-cover scale-110 animate-[slowZoom_20s_linear_infinite]"
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6 max-w-3xl"
          >

            <p className="text-gold uppercase tracking-[8px] text-xs mb-6">
              RJ Events
            </p>

            <h1 className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6">
              Our <span className="text-gold">Portfolio</span>
            </h1>

            <div className="w-24 h-[2px] bg-gold mx-auto mb-8"></div>

            <p className="text-white/80 text-lg leading-relaxed">
              Every wedding tells a story. Explore the beautiful celebrations
              we have crafted with elegance, emotion, and timeless memories.
            </p>

          </motion.div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/90 to-transparent"></div>

        </section>

        {/* PORTFOLIO SECTION */}
        <section className="py-40">

          <div className="container mx-auto px-6 space-y-40">

            {portfolio.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-24 items-center
                ${index % 2 === 1 ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}
              >

                {/* IMAGE */}
                <div className="group relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.couple}
                    className="w-full h-[700px] object-cover transition duration-[1500ms] ease-out group-hover:scale-110"
                  />

                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-700"></div>

                  {/* Luxury border animation */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-gold/50 transition duration-700"></div>

                </div>

                {/* TEXT */}
                <div className="max-w-lg">

                  <p className="text-gold uppercase tracking-[8px] text-xs mb-6">
                    Wedding Story
                  </p>

                  <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">

                    {item.couple}

                    <span className="block text-muted-foreground text-lg mt-3">
                      {item.location}
                    </span>

                  </h2>

                  {/* Divider */}
                  <div className="w-20 h-[2px] bg-gold mb-10"></div>

                  <Link
                    to={item.gallery}
                    className="inline-flex items-center gap-5 text-sm uppercase tracking-[3px] text-gold hover:text-maroon transition duration-300"
                  >

                    View Gallery

                    <span className="w-14 h-[1px] bg-gold transition-all duration-500 group-hover:w-24"></span>

                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

      </div>

      <Footer />
      <FloatingContact />
    </>
  );
};

export default PortfolioPage; 