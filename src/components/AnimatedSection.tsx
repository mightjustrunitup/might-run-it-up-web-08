
import React, { useEffect, useRef, useState } from "react";

type AnimationDirection = "up" | "down" | "left" | "right" | "scale" | "none";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  className?: string;
  threshold?: number;
  onClick?: () => void; // Add onClick handler to the props interface
}

const AnimatedSection = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.2,
  onClick, // Add onClick to the component props
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";

    const baseClass = "transition-all duration-1000";
    const delayClass = delay ? `delay-${delay}` : "";

    switch (direction) {
      case "up":
        return `${baseClass} animate-fade-in ${delayClass}`;
      case "down":
        return `${baseClass} animate-fade-in ${delayClass}`;
      case "left":
        return `${baseClass} animate-slide-in-right ${delayClass}`;
      case "right":
        return `${baseClass} animate-slide-in-left ${delayClass}`;
      case "scale":
        return `${baseClass} animate-scale-in ${delayClass}`;
      default:
        return `${baseClass} animate-fade-in ${delayClass}`;
    }
  };

  return (
    <div 
      ref={sectionRef} 
      className={`${getAnimationClass()} ${className}`}
      onClick={onClick} // Add the onClick handler to the div
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
