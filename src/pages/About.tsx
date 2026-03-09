import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MapPin, Palette, Utensils, Camera } from "lucide-react";
import hero1 from "@/assets/catering-service2.webp";
import hero2 from "@/assets/gallery-3.jpg";
import hero3 from "@/assets/gallery-4.jpg";
import founderImg from "@/assets/founder-img.jpg";
import discussionImg from "@/assets/discussion.jpg";
import albumcuration from "@/assets/albumcuration.jpg";
import decorvenue from "@/assets/decor-venue.jpg";
import prewedding from "@/assets/pre-wedding.webp";
import planning from "@/assets/planning.webp";
import candidcinematic from "@/assets/candid-cinematic.jpg";
import photograhygruhapravesha from "@/assets/gruhapraveshaimg.jpg";
import corporateeventdecor from "@/assets/corporate-eventdecor.jpg";
import corporateeventphoto from "@/assets/corporateeventphoto.jpg";
import endPhoto from "@/assets/natural-locations/gallery-33.jpg";
const slides = [hero1, hero2, hero3];

const Counter = ({ end, duration = 3000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * end));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>;
};

const processes = {
  Wedding: [
    {
      title: "Understanding Your Vision, Budget & Guest Experience",
      desc: "We begin with a detailed consultation to understand your expectations, preferred services, venue selection, guest count, and overall budget. This collaborative discussion helps us align every element of your celebration with your personal style and cultural traditions.",
      icon: Users,
      image: discussionImg
    },
    {
      title: "Strategic Planning & Seamless Coordination",
      desc: "Our team carefully plans and coordinates every aspect of your wedding — from traditional rituals and venue preparation to décor styling, catering arrangements, and photography coverage — ensuring a flawless and stress-free experience.",
      icon: MapPin,
      image: planning
    },
    {
      title: "Pre-Wedding Shoots & Storytelling",
      desc: "We curate personalized pre-wedding photoshoots that beautifully capture your journey together. From scenic locations to cinematic concepts, we create timeless memories that reflect your unique love story.",
      icon: Camera,
      image: prewedding
    },
    {
      title: "Catering & Guest Hospitality",
      desc: "Our culinary team designs carefully curated menus that respect your preferences and traditions. Along with impeccable hospitality arrangements, we ensure your guests feel welcomed and delighted throughout the celebration.",
      icon: Utensils,
      image: hero1
    },
    {
      title: "Luxury Décor & Venue Transformation",
      desc: "We transform your venue into an elegant and meaningful space with thoughtfully designed décor elements. Every floral arrangement, stage setup, and lighting detail is crafted to elevate the ambiance of your special day.",
      icon: Palette,
      image: decorvenue
    },
    {
      title: "Photography & Cinematic Videography",
      desc: "Our expert photographers and cinematographers capture every ritual, emotion, and candid moment with artistic precision, ensuring your memories are preserved beautifully for generations.",
      icon: Camera,
      image: candidcinematic
    },
    {
      title: "Album Curation & Final Delivery",
      desc: "We provide professionally edited photographs, handcrafted albums, and cinematic wedding films. Each deliverable is thoughtfully curated to preserve your cherished memories in the most elegant format.",
      icon: Camera,
      image: albumcuration
    }
  ],
  // Add icons for other events similarly
"Gruhapravesha": [
  {
    title: "Discussion & Ceremony Planning",
    desc: "We begin with a detailed consultation to understand the muhurtha timing, traditional rituals, guest count, décor preferences, and catering requirements. This ensures the ceremony is aligned with your cultural practices and family expectations.",
    icon: Users,
    image: discussionImg
  },
  {
    title: "Traditional Décor & Catering Arrangements",
    desc: "Our team designs elegant and culturally rooted décor that enhances the spiritual ambiance of your new home. We also coordinate catering services to ensure guests experience warm hospitality and delightful cuisine.",
    icon: Palette,
    image: hero1
  },
  {
    title: "Photography & Ceremony Coverage",
    desc: "We capture every sacred ritual, family blessing, and joyful moment with professional photography, preserving the essence of this auspicious beginning.",
    icon: Camera,
    image: photograhygruhapravesha
  },
  {
    title: "Album Curation & Final Delivery",
    desc: "We provide carefully edited photographs and beautifully designed albums, ensuring your Gruhapravesha memories are preserved with clarity and elegance.",
    icon: Camera,
    image: albumcuration
  }
],
    "Corporate Event": [
    {
        title: "Discussion & Strategic Planning",
        desc: "We begin by understanding your company objectives, event purpose, target audience, budget, and scale. This strategic planning session ensures every element aligns with your corporate goals and brand positioning.",
        icon: Users,
        image: discussionImg
    },
    {
        title: "Concept Development & Brand Integration",
        desc: "Our team develops a cohesive event concept that reflects your brand identity. From stage design and visual elements to digital displays and guest communication, every detail reinforces your corporate image.",
        icon: Palette,
        image: planning
    },
    {
        title: "Event Setup, Catering & Event Execution",
        desc: "We manage venue setup, décor styling, technical arrangements, catering services, and hospitality coordination to ensure a seamless and professionally executed event experience.",
        icon: MapPin,
        image: corporateeventdecor
    },
    {
        title: "Photography, Media Coverage & Delivery",
        desc: "Our professional photography and videography team captures keynote moments, branding highlights, and guest interactions. Final edited visuals and media assets are delivered promptly for corporate use and promotion.",
        icon: Camera,
        image: corporateeventphoto
    }
    ],
    "Namakarna": [
    {
        title: "Discussion & Ceremony Planning",
        desc: "We begin with a thoughtful consultation to understand the naming ritual traditions, muhurtha timing, guest count, décor preferences, and catering requirements. This ensures the ceremony reflects your family’s cultural values and blessings.",
        icon: Users,
        image: discussionImg
    },
    {
        title: "Traditional Décor & Catering Arrangements",
        desc: "Our team creates a serene and elegant setup with soft thematic décor suited for the auspicious occasion. We also coordinate catering services to provide warm hospitality for your family and guests.",
        icon: Palette,
        image: hero1
    },
    {
        title: "Photography & Ceremony Coverage",
        desc: "We capture every sacred ritual, joyful moment, and family blessing through professional photography, preserving the memories of your child’s special beginning.",
        icon: Camera,
        image: hero1
    },
    {
        title: "Album Curation & Final Delivery",
        desc: "We provide beautifully edited photographs and thoughtfully designed albums, ensuring this precious milestone is preserved for generations to cherish.",
        icon: Camera,
        image: hero1
    }
    ],

    Birthday: [
    {
        title: "Discussion & Celebration Planning",
        desc: "We begin by understanding the theme preference, guest list, venue selection, and overall celebration style. This planning session ensures the birthday event reflects the personality and joy of the special individual.",
        icon: Users,
        image: hero1
    },
    {
        title: "Thematic Décor & Catering Arrangements",
        desc: "Our team creates vibrant and customized décor setups that bring your chosen theme to life. We also coordinate catering services to ensure guests enjoy a delightful dining experience.",
        icon: Palette,
        image: hero2
    },
    {
        title: "Photography & Videography Coverage",
        desc: "From candid smiles to cake-cutting moments, our professional team captures every joyful highlight of the celebration with high-quality photography and videography.",
        icon: Camera,
        image: hero3
    },
    {
        title: "Album Curation & Final Delivery",
        desc: "We provide professionally edited photos, creative albums, and event videos, preserving the fun-filled memories of your special celebration.",
        icon: Camera,
        image: hero1
    }
    ],

    Anniversary: [
    {
        title: "Discussion & Celebration Planning",
        desc: "We begin with a detailed consultation to understand your vision, guest list, venue preference, and desired ambiance. This ensures the anniversary celebration reflects your journey together.",
        icon: Users,
        image: hero1
    },
    {
        title: "Romantic Décor & Catering Arrangements",
        desc: "Our team designs elegant floral décor, lighting setups, and stage arrangements that create a warm and intimate atmosphere. We also curate catering services tailored to your preferences.",
        icon: Palette,
        image: hero2
    },
    {
        title: "Photography & Cinematic Videography",
        desc: "We beautifully capture the special moments, speeches, and emotions of your anniversary celebration through professional photography and cinematic video coverage.",
        icon: Camera,
        image: hero3
    },
    {
        title: "Album Curation & Final Delivery",
        desc: "We deliver carefully edited photographs and premium-designed albums that preserve the love and memories shared on your special milestone.",
        icon: Camera,
        image: hero1
    }
    ],

  "Baby Shower": [
    {
    title: "Discussion & Ceremony Planning",
    desc: "We begin with a thoughtful consultation to understand your traditions, guest count, décor preferences, and catering expectations. This ensures the celebration is beautifully organized and aligned with your family’s values.",
    icon: Users,
    image: hero1
    },
    {
    title: "Thematic Décor & Elegant Setup",
    desc: "Our team designs a charming and meaningful setup that reflects the joy of the occasion. From floral arrangements to stage décor and seating arrangements, every detail is carefully curated.",
    icon: Palette,
    image: hero1
    },
    {
    title: "Hospitality & Catering Arrangements",
    desc: "We coordinate seamless guest hospitality and curate a delightful menu experience, ensuring every guest feels welcomed and cared for throughout the celebration.",
    icon: Utensils,
    image: hero1
    },
    {
    title: "Photography & Final Delivery",
    desc: "We capture the most precious moments of the celebration and provide professionally edited photographs and albums, preserving these beautiful memories for years to come.",
    icon: Camera,
    image: hero1
    }
  ],
};

const About = () => {
  const [current, setCurrent] = useState(0);
  const [activeEvent, setActiveEvent] = useState("Wedding");
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <TopHeader />
      <Navbar />

      <div className="bg-background">

        {/* HERO SLIDESHOW */}
     {/* ABOUT HERO SECTION */}
    <section className="relative h-[88vh] flex items-center justify-center overflow-hidden">

    {/* Background Slideshow */}
    {slides.map((img, i) => (
        <img
        key={i}
        src={img}
        alt="RJ Events Celebration"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] ease-in-out ${
            current === i
            ? "opacity-100 scale-105"
            : "opacity-0 scale-100"
        }`}
        />
    ))}

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/65" />

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6">
        Turning Dreams Into
        <br />
        <span className="text-gold">Grand Celebrations</span>
        </h1>

        <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-body">
        For over 25 years, RJ Events has been delivering beautifully curated weddings 
        and events across Bangalore. Our experience, creativity, and commitment to 
        excellence have helped us successfully organize 300+ events and bring joy 
        to more than 1000 happy families.
        </p>
    </div>

    {/* Gold Progress Indicator */}
    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10">
        <div
        key={current}
        className="h-full bg-gold animate-slideProgress"
        ></div>
    </div>

    </section>

        {/* PREMIUM STATS */}
<div className="absolute bottom-10 md:bottom-14 left-0 w-full z-10">
  <div className="container mx-auto px-4 md:px-6">

    <div className="
      grid grid-cols-3 md:grid-cols-3
      gap-4 md:gap-14
      text-center
    ">

      {[
        { number: 25, label: "Years of Experience" },
        { number: 600, label: "Events Organized" },
        { number: 2000, label: "Happy Families" },
      ].map((stat, i) => (
        <div
          key={i}
          className="group cursor-default transition-all duration-500"
        >

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading text-gold font-semibold transition-all duration-500 group-hover:scale-110">
            <Counter end={stat.number} />+
          </h2>

          <p className="text-white/75 text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] mt-2 sm:mt-3 relative inline-block">
            {stat.label}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></span>
          </p>

        </div>
      ))}

    </div>

  </div>
</div> 
        {/* JOURNEY SECTION */}
{/* OUR JOURNEY SECTION */}
<section className="relative py-36 bg-background overflow-hidden">

  {/* Subtle Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] pointer-events-none"></div>

  <div className="container mx-auto px-6 relative z-10">

    <div className="grid lg:grid-cols-2 gap-24 items-start">

      {/* LEFT FOUNDER IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative flex flex-col"
      >

        <div className="relative w-full max-w-[560px]">

          {/* Elegant Gold Offset Frame */}
          <div className="absolute -top-8 -left-8 w-full h-full border border-gold/50 z-0"></div>

          {/* Secondary Frame */}
          <div className="absolute -bottom-8 -right-8 w-full h-full border border-white/10 z-0"></div>

          {/* Image Container */}
          <div className="relative z-10 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] group">
            <img
              src={founderImg}
              alt="Founder - RJ Events"
              className="w-full h-[680px] object-cover transition-transform duration-[1600ms] group-hover:scale-110"
            />

            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Founder Text */}
{/* Founder Text */}
<div className="mt-12 text-center  lg:text-left">

  <p className="text-gold uppercase tracking-[6px] text-xs font-medium mb-4">
    Our Founder
  </p>

  <div className="flex items-center gap-4">
    <h4 className="font-heading text-3xl text-foreground font-semibold leading-none">
      Jayaram
    </h4>

    <div className="flex-1 h-[1px] bg-gold/40"></div>
  </div>

  <p className="text-muted-foreground text-sm tracking-wide mt-3">
    Founder & Visionary
  </p>

</div>

      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <span className="text-gold uppercase tracking-[6px] text-xs font-medium">
          Our Journey
        </span>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl mt-6 mb-12 leading-tight font-semibold">
          From Capturing Moments to
          <br />
          <span className="text-gold relative inline-block">
            Creating Grand Celebrations
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gold/40"></span>
          </span>
        </h2>

        <motion.p
          className="text-muted-foreground leading-relaxed text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          RJ Events began its journey in 
          <span className="text-foreground font-medium"> 2001 </span>
          with a simple yet powerful passion — Photography. What started as capturing
          beautiful wedding moments soon became a trusted name for preserving emotions,
          smiles, and unforgettable memories.
        </motion.p>

        <motion.p
          className="text-muted-foreground leading-relaxed text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Over the years, as our clients placed their trust in us, we understood that
          weddings are more than just photographs — they are experiences. With growing
          demand and continued support, RJ Events expanded beyond photography into
          <span className="text-foreground font-medium">
            {" "}Wedding Decorations and Catering Services
          </span>,
          offering complete event solutions under one roof.
        </motion.p>

        <motion.p
          className="text-muted-foreground leading-relaxed text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Today, RJ Events proudly stands as a full-service wedding and event
          management company, delivering seamless celebrations with creativity,
          quality, and dedication.
        </motion.p>

        <motion.p
          className="text-muted-foreground leading-relaxed text-lg italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          From one camera in 2001 to managing hundreds of successful events —
          our journey has been built on trust, passion, and the happiness of every family we serve.
        </motion.p>

      </motion.div>

    </div>

  </div>
</section>
    {/* OUR PROCESS */}
    <section className="py-32 bg-muted/30 relative overflow-hidden">
    <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
        <h2 className="section-heading">
            Our <span className="gold">Process</span>
        </h2>
        </div>

        {/* EVENT BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
        {Object.keys(processes).map((event) => (
            <button
            key={event}
            onClick={() => setActiveEvent(event)}
            className={`px-6 py-2 text-sm tracking-wide border transition-all duration-300 ${
                activeEvent === event
                ? "bg-gold text-maroon-deep border-gold"
                : "border-gold/40 hover:bg-gold/10"
            }`}
            >
            {event}
            </button>
        ))}
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-6xl mx-auto">

        {/* Center Vertical Line (Now visible on ALL screens) */}
        <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 w-[2px] bg-gold/40 -translate-x-1/2"
        />

        <AnimatePresence mode="wait">
            <motion.div
            key={activeEvent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="space-y-24"
            >
            {processes[activeEvent].map((step, index) => {
                const isLeft = index % 2 === 0;
                const Icon = step.icon;

                return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
                >

                    {/* ICON (Centered on Line) */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-gold bg-background flex items-center justify-center text-gold shadow-lg">
                        <Icon size={18} />
                    </div>
                    </div>

                    {/* TEXT SIDE */}
                    <div
                    className={`
                        mt-10 relative z-10
                        bg-muted/30 px-6 py-4
                        text-center md:text-left
                        ${isLeft ? "md:order-1 md:text-right md:pr-16" : "md:order-2 md:pl-16"}
                    `}
                    >
                    <h3 className="font-heading text-xl md:text-2xl mb-4">
                        {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {step.desc}
                    </p>
                    </div>

                    {/* IMAGE SIDE */}
                    <div
                    className={`
                        flex justify-center
                        ${isLeft ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16"}
                    `}
                    >
                    <div className="relative group">

                        {/* Soft Glow */}
                        <div className="absolute inset-0 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Gold Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-gold/50 scale-110"></div>

                        <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
                        <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                        />
                        </div>

                    </div>
                    </div>

                </motion.div>
                );
            })}
            </motion.div>
        </AnimatePresence>

        </div>

    </div>
    </section>
{/* WHY CHOOSE US */}
<section className="py-32 bg-background relative overflow-hidden">

  {/* Subtle Gold Glow Background */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold/5 blur-[120px] pointer-events-none"></div>

  <div className="container mx-auto px-6 relative z-10">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="font-heading text-3xl md:text-4xl mb-6">
        Why Choose <span className="text-gold">RJ Events</span>?
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Your trusted partner for creating elegant, meaningful, and flawlessly executed celebrations.
      </p>
    </div>

    {/* Premium Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          title: "25+ Years of Experience",
          desc: "Decades of trusted expertise built through hundreds of successful and memorable celebrations."
        },
        {
          title: "Complete Event Solutions",
          desc: "Photography, Decoration, and Catering — seamlessly managed under one roof."
        },
        {
          title: "Personalized Planning Approach",
          desc: "Every event is thoughtfully designed to reflect your unique vision, traditions, and style."
        },
        {
          title: "Professional & Dedicated Team",
          desc: "A passionate team of experienced planners, designers, and coordinators committed to excellence."
        },
        {
          title: "Quality & Attention to Detail",
          desc: "From concept to execution, every detail is handled with precision and perfection."
        },
        {
          title: "Trusted by 1000+ Happy Families",
          desc: "Creating smiles, lasting memories, and meaningful celebrations since 2001."
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative p-8 border border-border group transition-all duration-500 hover:border-gold"
        >

          {/* Gold Accent Line */}
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full"></div>

            <h3 className="font-heading text-xl md:text-2xl mb-4 leading-snug text-neutral-900 group-hover:text-maroon transition-colors duration-300 relative">
            {item.title}

            <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-gold transition-all duration-500 group-hover:w-full"></span>


            {/* Premium underline */}
            <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-gold/70 transition-all duration-500 group-hover:w-full"></span>
            </h3>

          <p className="text-muted-foreground leading-relaxed text-sm">
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>

    </div>
    </section>

{/* FINAL CTA SECTION */}
<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <img
    src={endPhoto}
    alt="RJ Events Celebration"
    className="absolute inset-0 w-full h-full object-cover scale-105 object-bottom"
  />

  {/* Cinematic Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

  {/* Subtle Gold Glow */}
  <div className="absolute inset-0 bg-gold/5 mix-blend-overlay"></div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-3xl px-6">

    <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6">
      We Are Ready to Celebrate
      <br />
      <span className="text-gold">Your Special Event</span>
    </h2>

    <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
      Whether it’s a wedding, corporate gathering, family celebration, or milestone event,
      our team is here to transform your vision into a flawless and unforgettable experience.
    </p>

    <a
      href="/contact"
      className="inline-block px-10 py-4 border border-gold text-gold tracking-wide uppercase text-sm transition-all duration-500 hover:bg-gold hover:text-maroon-deep"
    >
      Contact Us Today
    </a>

  </div>

  {/* Elegant Bottom Fade */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

</section>

      </div>

      <Footer />
      <FloatingContact />
    </>
  );
};

export default About;