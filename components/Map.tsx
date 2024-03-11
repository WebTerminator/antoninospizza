import { createRoot } from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";

import "mapbox-gl/dist/mapbox-gl.css";
import { createRef, useEffect, useRef } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.NEXT_MAPBOX_ACCESS_TOKEN;

const Marker = ({ onClick, children, feature }: any) => {
  const _onClick = () => {
    onClick(feature.properties.description);
  };

  return (
    <button
      style={{ appearance: "none", border: "0", background: "transparent" }}
      onClick={_onClick}
      className="marker"
    >
      <div style={{ width: "40px" }}>
        <img src="/icons/marker.svg" alt="pizza icon" />
      </div>
    </button>
  );
};

const MapContainer = ({
  locations,
  className,
}: {
  locations: {
    lat: number;
    lon: number;
  }[];
  className?: string;
}) => {
  const mapContainer = useRef(null);

  const locationsCenter = locations.reduce(
    (acc, location) => {
      acc.lat += location.lat;
      acc.lon += location.lon;
      return acc;
    },
    { lat: 0, lon: 0 }
  );

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [
        locationsCenter.lon / locations.length,
        locationsCenter.lat / locations.length,
      ],
      zoom: 10,
    });

    const points = locations.map((location) => ({
      type: "Feature",
      properties: {
        title: "Lincoln Park",
        description: "A northside park that is home to the Lincoln Park Zoo",
      },
      geometry: {
        coordinates: [location.lon, location.lat],
        type: "Point",
      },
    }));

    points.forEach((point) => {
      const ref = createRef();

      ref.current = document.createElement("div");

      createRoot(ref.current).render(
        <Marker onClick={markerClicked} feature={point} />
      );

      new mapboxgl.Marker(ref.current)
        .setLngLat(point.geometry.coordinates)
        .addTo(map);
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.flyT;

    return () => map.remove();
  });

  const markerClicked = (title: string) => {
    window.alert(title);
  };

  return <div ref={mapContainer} className={className} />;
};

export default function Map({
  locations,
  className,
}: {
  locations: { lat: number; lon: number }[];
  className?: string;
}) {
  return <MapContainer locations={locations} className={className} />;
}
