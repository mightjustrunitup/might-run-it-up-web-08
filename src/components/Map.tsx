
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.076550092!2d-74.309143196348!3d40.69667271425056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1744390892674!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0, minHeight: "400px", borderRadius: "8px" }}
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="MightJustRunItUp Headquarters Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
