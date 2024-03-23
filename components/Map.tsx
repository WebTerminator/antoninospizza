import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

export default function Map2({
  locations,
  className,
}: {
  locations: { lat: number; lon: number }[];
  className?: string;
}) {
  const locationsCenter = locations.reduce(
    (acc, location) => {
      acc.lat += location.lat;
      acc.lon += location.lon;
      return acc;
    },
    { lat: 0, lon: 0 }
  );
  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: locationsCenter.lon / locations.length,
        latitude: locationsCenter.lat / locations.length,
        zoom: 10,
      }}
      style={{ maxWidth: 500, minWidth: "320px", width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.NEXT_MAPBOX_ACCESS_TOKEN}
    >
      {locations.map((location) => (
        <Marker
          key={`${location.lat}-${location.lon}`}
          longitude={location.lon}
          latitude={location.lat}
        >
          <div style={{ width: "40px" }}>
            <img src="/icons/marker.svg" alt="pizza icon" />
          </div>
        </Marker>
      ))}
    </Map>
  );
}
