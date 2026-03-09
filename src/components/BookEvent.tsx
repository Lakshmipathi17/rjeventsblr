import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import weddingImg from "@/assets/wedding-service.webp";
import gruhapraveshaImg from "@/assets/gruhapravesha-service.jpg";
import namakarnaImg from "@/assets/namkarna-service.png";
import birthdayImg from "@/assets/birthday-service.jpg";
import anniversaryImg from "@/assets/anniversary-service.jpeg";
import babyShowerImg from "@/assets/babyshower-service.jpg";
import corporateEventImg from "@/assets/corporateevent-service.jpeg";
import otherOcasionsImg from "@/assets/otherocassion-service.jpg";
import ContactBooking from "@/pages/ContactBooking";  

const events = [
  { label: "Wedding", image: weddingImg , location: "/package-wedding" },
  { label: "Gruhapravesha", image: gruhapraveshaImg, location: "/package-gruhapravesha" },
  { label: "Namakarna", image: namakarnaImg, location: "/package-namakarna" },
  { label: "Birthday", image: birthdayImg, location: "/package-birthday" },
  { label: "Corporate Event", image: corporateEventImg, location: "/package-corporate-events" },
  { label: "Anniversary", image: anniversaryImg, location: "/package-anniversary" },
  { label: "Baby Shower", image: babyShowerImg, location: "/package-baby-shower" },
  { label: "Other occasions", image: otherOcasionsImg, location: "/contact" },
];

const BookEvent = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section id="book-event" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Book Your Event <span className="gold">With Us</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose your celebration type and let us create something magical.
          </p>
        </div>

        {/* 2x2 Square Grid */}
{/* Premium 4 Event Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
  {events.map((event, i) => (
    <a href={event.location} className="block">
    <motion.div
      key={event.label}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.04 }}
    >
      {/* Image */}
      <img
        src={event.image}
        alt={event.label}
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

      {/* Gold Border Animation */}
      <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-all duration-500 rounded-2xl" />

      {/* Title */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <h3 className="font-heading text-lg md:text-xl text-white tracking-wide transition-all duration-500 group-hover:tracking-widest">
          {event.label}
        </h3>

        {/* Underline animation */}
        <div className="mt-2 mx-auto h-[1px] w-0 bg-gold transition-all duration-500 group-hover:w-16" />
      </div>
    </motion.div></a>
  ))}
</div>
      </div>
    </section>
  );
};

export default BookEvent;