
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  showScrollDown?: boolean;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  buttonText = "Learn More",
  buttonLink = "/about",
  showScrollDown = false,
}: HeroProps) => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 17, 40, 0.8), rgba(10, 17, 40, 0.8)), url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/10 to-navy-dark/90"></div>
      <div className="container-custom relative z-10 text-center py-20">
        <h1 className="heading-xl text-white mb-6 tracking-tight leading-tight animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light animate-fade-in delay-200">
          {subtitle}
        </p>
        <div className="animate-fade-in delay-300">
          <Button asChild className="btn-secondary btn-lg">
            <Link to={buttonLink}>
              {buttonText} <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        {showScrollDown && (
          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float"
            onClick={scrollDown}
          >
            <ChevronDown size={36} className="text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
