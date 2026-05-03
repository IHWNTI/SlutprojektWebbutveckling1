import { MapContainer, TileLayer } from "react-leaflet";
import MapControls from "./MapControls";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};


const position: [number, number] = [59.8586, 17.6389];

export default function MapView({ children }: Props) {

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
      <MapControls />

      {children}
    </MapContainer>
  );
}

