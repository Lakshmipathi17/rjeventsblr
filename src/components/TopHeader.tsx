import { Mail, Phone } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="top-bar py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm font-body">
        <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
          <Mail className="w-4 h-4" />
          <a
            href="mailto:rjeventsblr@gmail.com?subject=Inquiry%20for%20Event%20Planning&body=Hello%20RJ%20Events,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services.%0A"
            className="hover:text-gold transition-colors duration-300"
          >
            rjeventsblr@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
          <Phone className="w-4 h-4" />
          <div className="flex items-center gap-3">
            <a
              href="tel:+919980900056"
              className="hover:text-gold transition-colors duration-300"
            >
            9980900056
            </a>
            <span className="text-primary-foreground/50">|</span>
            <a
              href="tel:+918123265516"
              className="hover:text-gold transition-colors duration-300"
            >
            8123265516
            </a>
            <span className="text-primary-foreground/50">|</span>
            <a
              href="tel:+919739104346"
              className="hover:text-gold transition-colors duration-300"
            >
            9739104346
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;