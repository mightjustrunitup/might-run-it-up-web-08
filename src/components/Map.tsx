
import React from "react";
import { MapPin } from "lucide-react";

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className }) => {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174433845846!2d-73.9877407!3d40.750378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5m2!1sen!2sus"
          width="100%" 
          height="100%" 
          style={{ border: 0, minHeight: "400px", borderRadius: "8px" }}
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="MightJustRunItUp Headquarters"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
