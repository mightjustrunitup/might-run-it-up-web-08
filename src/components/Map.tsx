
import React from "react";
import { MapPin } from "lucide-react";

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className }) => {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden bg-gray-100 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-navy bg-opacity-5 z-10"></div>
        <div className="relative z-20 flex flex-col items-center">
          <MapPin size={48} className="text-navy mb-4" />
          <h3 className="text-xl font-semibold text-navy mb-2">MightJustRunItUp Headquarters</h3>
          <p className="text-gray-600 text-center">
            123 Luxury Avenue, Suite 1500<br />
            New York, NY 10001
          </p>
        </div>
        
        {/* Background pattern for visual interest */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, #0A1128 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default Map;
