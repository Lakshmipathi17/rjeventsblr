import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const dropdownItems = [
  { label: "Wedding", path: "wedding" },
  { label: "Gruhapravesha", path: "gruhapravesha" },
  { label: "Birthday", path: "birthday" },
  { label: "Corporate Events", path: "corporate-events" },
  { label: "Anniversary", path: "anniversary" },
  { label: "Baby Shower", path: "baby-shower" },
  { label: "Namakarna", path: "namakarna" },
  { label: "Other Occasions", path: "other-occasions" },
];

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "PHOTOGRAPHY", path: "/photography-wedding", dropdown: true },
  { label: "DECORATION", path: "/decoration-wedding", dropdown: true },
  { label: "CATERING", path: "/catering-wedding", dropdown: true },
  { label: "PORTFOLIO", path: "/portfolio-wedding", dropdown: true },
  { label: "STANDARD PACKAGES", path: "/package-wedding", dropdown: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-lg" : "bg-popover/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center h-16 md:h-18 xl:h-20">

        {/* Logo */}
        <Link
          to="/"
          className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-maroon"
        >
          RJ <span className="text-gold">Events</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-5 ml-20 xl:ml-36">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                className="relative flex items-center gap-1 text-[14px] font-medium tracking-wide text-foreground/75 hover:text-gold transition-colors duration-300"
              >
                <span className="relative group">
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                </span>
                {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 bg-background rounded-xl shadow-md border border-border overflow-hidden min-w-[220px]"
                    >
                      {dropdownItems.map((sub) => {
                        const prefix = item.path.split("-")[0];
                        const eventSlug = sub.path

                        return (
                          <Link
                            key={sub.label}
                            to={`${prefix}-${eventSlug}`}
                            className="block px-5 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-gold transition-colors"
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

          {/* Book Button */}
          <Link to="/contact" className="btn-gold text-sm ml-6">
            BOOK US NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden ml-auto text-maroon hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden overflow-hidden bg-popover border-t border-border"
          >
            <div className="px-2 py-2 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      item.dropdown
                        ? setActiveDropdown(
                            activeDropdown === item.label ? null : item.label
                          )
                        : setMobileOpen(false)
                    }
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {item.dropdown && activeDropdown === item.label && (
                    <div className="pl-4 space-y-1">
                      {dropdownItems.map((sub) => {
                        const prefix = item.path.split("-")[0];
                        const eventSlug = sub.path

                        return (
                          <Link
                            key={sub.label}
                            to={`${prefix}-${eventSlug}`}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm text-foreground/70 hover:text-gold"
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block btn-gold text-center mt-4"
              >
                BOOK US NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;