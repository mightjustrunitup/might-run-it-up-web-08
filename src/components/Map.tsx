
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState<string>("");

  useEffect(() => {
    if (!mapContainer.current || !mapToken) return;

    // Initialize the map
    mapboxgl.accessToken = mapToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-74.006, 40.7128], // NYC coordinates
      zoom: 14,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      "top-right"
    );

    // Add a marker for the office location
    const marker = new mapboxgl.Marker({
      color: "#0A1128"
    })
      .setLngLat([-74.006, 40.7128])
      .addTo(map.current);

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapToken]);

  return (
    <div className={`relative h-full w-full ${className}`}>
      {!mapToken ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-navy/10 rounded-lg p-8">
          <MapPin size={48} className="text-navy mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-4">MightJustRunItUp Headquarters</h3>
          <p className="text-gray-600 mb-4">123 Luxury Avenue, New York, NY</p>
          
          <div className="max-w-md">
            <label htmlFor="mapbox-token" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your Mapbox access token to display the map
            </label>
            <input
              id="mapbox-token"
              type="text"
              className="input-luxury mb-2"
              placeholder="pk.eyJ1IjoieW91..."
              onChange={(e) => setMapToken(e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Get your free token at <a href="https://mapbox.com" className="text-navy underline" target="_blank" rel="noreferrer">mapbox.com</a>
            </p>
          </div>
        </div>
      ) : (
        <div ref={mapContainer} className="w-full h-full min-h-[400px] rounded-lg overflow-hidden" />
      )}
    </div>
  );
};

export default Map;
