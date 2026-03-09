import { useState } from "react";
import emailjs from "@emailjs/browser";

import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const eventTypes = [
  "Wedding",
  "Gruhapravesha",
  "Namakarna",
  "Birthday",
  "Anniversary",
  "Baby Shower",
  "Corporate Event",
  "Other Occasion",
];

const ContactBooking = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    event: "",
    description: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs.send(
      "service_9nxt3q9",
      "template_1ttn8nr",
      formData,
      "fVnNxSqc-Fo9QqmFM"
    )
    .then(() => {
      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        event: "",
        description: "",
      });

      setTimeout(() => setSuccess(false), 3000);
    })
  };

  return (
    <>
      <TopHeader />
      <Navbar />

<section className="py-32 bg-background">
  <div className="container mx-auto px-6 max-w-2xl">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-gold uppercase tracking-[6px] text-xs mb-4">
        RJ Events
      </p>

      <h1 className="font-heading text-4xl md:text-5xl mb-4">
        Book Your <span className="text-gold">Event</span>
      </h1>

      <div className="w-20 h-[2px] bg-gold mx-auto mb-6"></div>

      <p className="text-muted-foreground max-w-lg mx-auto">
        Tell us about your celebration and our team will get back to you shortly.
      </p>

    </div>

    {/* Premium Form Card */}
    <form
      onSubmit={handleSubmit}
      className="space-y-7 border border-border p-12 bg-background/60 backdrop-blur-md shadow-[0_25px_60px_rgba(0,0,0,0.35)] relative overflow-hidden"
    >

      {/* Gold Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-gold/20 via-transparent to-transparent"></div>

      {/* Name */}
      <div>
        <label className="block text-sm mb-2 text-muted-foreground">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-border px-4 py-3 bg-transparent focus:outline-none focus:border-gold transition-all duration-300"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm mb-2 text-muted-foreground">
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-border px-4 py-3 bg-transparent focus:outline-none focus:border-gold transition-all duration-300"
        />
      </div>

      {/* Event Type */}
      <div>
        <label className="block text-sm mb-2 text-muted-foreground">
          Event Type
        </label>

        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
          className="w-full border border-border px-4 py-3 bg-background focus:outline-none focus:border-gold transition-all duration-300"
        >
          <option value="">Select Event</option>

          {eventTypes.map((event) => (
            <option key={event} value={event}>
              {event}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm mb-2 text-muted-foreground">
          Event Details
        </label>

        <textarea
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-border px-4 py-3 bg-transparent focus:outline-none focus:border-gold transition-all duration-300"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-4 border border-gold text-gold uppercase tracking-wider transition-all duration-500 hover:bg-gold hover:text-maroon-deep hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
      >
        Submit Request
      </button>

    </form>

    {/* Success Popup */}
    {success && (
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 border border-gold shadow-2xl animate-fadeIn">
        We will get back to you ASAP
      </div>
    )}

  </div>
{/* Call Us Section */}
<div className="mt-14 text-center border border-border p-8 bg-background/60 backdrop-blur-md shadow-lg">

  <h3 className="font-heading text-2xl mb-4">
    Or Call Us <span className="text-gold">Now</span>
  </h3>

  <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg font-medium">

    <a
      href="tel:+919980900056"
      className="hover:text-gold transition-colors"
    >
      +91 9980900056
    </a>

    <span className="hidden md:block text-muted-foreground">|</span>

    <a
      href="tel:+918123265516"
      className="hover:text-gold transition-colors"
    >
      +91 8123265516
    </a>

    <span className="hidden md:block text-muted-foreground">|</span>

    <a
      href="tel:+919739104346"
      className="hover:text-gold transition-colors"
    >
      +91 9739104346
    </a>

  </div>

  <p className="text-muted-foreground text-sm mt-4">
    Speak directly with our team for quick assistance.
  </p>

</div>
</section>

      <Footer />
      <FloatingContact />
    </>
  );
};

export default ContactBooking;