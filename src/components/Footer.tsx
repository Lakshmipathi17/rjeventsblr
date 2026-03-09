import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Play } from "lucide-react";

const Footer = () => {
  const youtubeVideoId = "6aYtsk0-wh0"; 

  return (
    <footer id="contact" className="relative bg-maroon-deep text-primary-foreground overflow-hidden">

      {/* Top Gold Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-70"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl font-medium tracking-tight mb-5">
              RJ <span className="text-gold">Events</span>
            </h3>

            <p className="text-primary-foreground/70 text-sm leading-relaxed font-body max-w-xs">
              Crafting unforgettable weddings and celebrations with elegance,
              passion, and perfection since 2001.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Instagram, link: "https://instagram.com/rjeventsblr" },
                { Icon: Facebook, link: "https://facebook.com/yourprofile" },
                { Icon: Youtube, link: "https://youtube.com/channel/UCS_nx2Jeny9gN3YM_2_kJCQ" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 flex items-center justify-center border border-primary-foreground/20 hover:border-gold transition-all duration-500"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/70 group-hover:text-gold transition-colors duration-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6 text-gold tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 font-body text-sm">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={link.toLowerCase() === "contact" ? "/contact" : `#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6 text-gold tracking-wide">
              Contact Us
            </h4>

            <ul className="space-y-4 font-body text-sm">

              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:rjeventsblr@gmail.com" className="hover:text-gold transition-colors">
                  rjeventsblr@gmail.com
                </a>
              </li>
              {/* Phone Numbers Side by Side */}
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-gold" />
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+919980900056"
                    className="hover:text-gold transition-colors duration-300"
                  >
                    +91 9980900056
                  </a>
                  <span className="text-primary-foreground/40">|</span>
                  <a
                    href="tel:+918123265516"
                    className="hover:text-gold transition-colors duration-300"
                  >
                    +91 8123265516
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                Bangalore, Karnataka, India
              </li>
            </ul>
          </div>

          {/* YouTube Preview */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6 text-gold tracking-wide">
              Watch Our Work
            </h4>

            <a
              href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block overflow-hidden border border-primary-foreground/20 hover:border-gold transition-all duration-500"
            >
              <img
                src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
                alt="YouTube Preview"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gold/90 flex items-center justify-center rounded-full shadow-lg">
                  <Play className="w-5 h-5 text-maroon-deep ml-1" />
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 py-6">
        <p className="text-center text-primary-foreground/50 text-sm font-body tracking-wide">
          © {new Date().getFullYear()} RJ Events. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;