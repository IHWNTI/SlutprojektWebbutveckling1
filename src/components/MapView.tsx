import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import MapControls from "./MapControls";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};


const position: [number, number] = [59.8586, 17.6389];

export default function MapView({ children }: Props) {
  const route: [number, number][] = [ 
    [59.8586, 17.6389],
    [59.857, 17.64],
    [59.856, 17.645],
  ];

  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
  });

  return (
    <MapContainer
      center={position}
      zoom={14}
      zoomControl={false}
      className="map"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={customIcon} />
      <Polyline positions={route} color="red" />

      <MapControls />

      {children}
    </MapContainer>
  );
}

