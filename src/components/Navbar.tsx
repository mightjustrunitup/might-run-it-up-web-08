
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-display text-2xl font-bold ${scrolled ? "text-navy" : "text-white"}`}>
            MightJustRunItUp
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-all duration-300 ${
                scrolled ? "text-navy hover:text-gold" : "text-white hover:text-gold"
              } ${location.pathname === link.path ? "border-b-2 border-gold" : ""}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            className={scrolled ? "btn-primary" : "btn-secondary"}
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-navy"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={24} className={scrolled ? "text-navy" : "text-white"} />
          ) : (
            <Menu size={24} className={scrolled ? "text-navy" : "text-white"} />
          )}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-navy-dark bg-opacity-95 z-50 lg:hidden transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-6">
            <button onClick={toggleMenu} aria-label="Close Menu">
              <X size={24} className="text-white" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-medium text-white hover:text-gold transition-all duration-300 ${
                  location.pathname === link.path ? "text-gold" : ""
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="btn-secondary mt-6">
              <Link to="/contact" onClick={closeMenu}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
