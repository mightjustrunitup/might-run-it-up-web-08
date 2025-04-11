
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapPin } from "lucide-react";

interface MapProps {
  className?: string;
}

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '400px',
  borderRadius: '8px'
};

const center = {
  lat: 40.7128,
  lng: -74.006 // NYC coordinates
};

const Map: React.FC<MapProps> = ({ className }) => {
  const [apiKey, setApiKey] = useState<string>("");

  return (
    <div className={`relative h-full w-full ${className}`}>
      {!apiKey ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-navy/10 rounded-lg p-8">
          <MapPin size={48} className="text-navy mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-4">MightJustRunItUp Headquarters</h3>
          <p className="text-gray-600 mb-4">123 Luxury Avenue, New York, NY</p>
          
          <div className="max-w-md">
            <label htmlFor="google-maps-key" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your Google Maps API key to display the map
            </label>
            <input
              id="google-maps-key"
              type="text"
              className="input-luxury mb-2"
              placeholder="AIzaSyA..."
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Get your API key from <a href="https://console.cloud.google.com/google/maps-apis" className="text-navy underline" target="_blank" rel="noreferrer">Google Cloud Console</a>
            </p>
          </div>
        </div>
      ) : (
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
            options={{
              streetViewControl: true,
              mapTypeControl: true,
              fullscreenControl: true,
            }}
          >
            <Marker
              position={center}
              icon={{
                path: "M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z",
                fillColor: "#0A1128",
                fillOpacity: 1,
                strokeColor: "#000",
                strokeWeight: 1,
                scale: 1.5,
              }}
            />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default Map;
