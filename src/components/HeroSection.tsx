import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    emailjs.send(
      "service_9nxt3q9",
      "template_1ttn8nr",
      {
        name: formData.name,
        phone: formData.phone,
        event: "Quote Request",
        description: "User requested a quote from hero section"
      },
      "fVnNxSqc-Fo9QqmFM"
    )
    .then(() => {

      setSuccess(true);

      setFormData({
        name: "",
        phone: ""
      });

      setTimeout(() => setSuccess(false), 3000);

    })
    .catch((error) => {
      console.log("Email error:", error);
    });
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">

      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 py-20">

        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Turning Your Dream{" "}
            <span className="text-gold">Celebrations</span> Into Reality
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-body">
            RJ Events – Crafting unforgettable weddings and celebrations with
            elegance and perfection.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/about" className="btn-elegant-outline">
              Explore RJ Events
            </a>
          </div>
        </motion.div>

        {/* Quote Form */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-popover/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-border/50">

            <h3 className="font-heading text-xl font-bold text-primary mb-1">
              RJ <span className="text-gold">Events</span>
            </h3>

            <p className="text-muted-foreground text-sm mb-5">
              Get a free quote for your event
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
              />

              <div className="w-full flex items-center px-4 py-4 rounded-lg bg-muted border border-border focus-within:ring-2 focus-within:ring-gold/50 transition">

                <span className="text-muted-foreground text-sm mr-2">
                  +91
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-sm focus:outline-none"
                />

              </div>

              <button type="submit" className="btn-gold w-full text-sm font-bold">
                Get a Free Quote
              </button>

            </form>
          </div>
        </motion.div>

      </div>

      {/* Success Popup */}
      {success && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 border border-gold shadow-xl">
          We will contact you shortly
        </div>
      )}

    </section>
  );
};

export default HeroSection;