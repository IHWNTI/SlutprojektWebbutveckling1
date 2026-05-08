import { MapContainer, TileLayer } from "react-leaflet";
import MapControls from "./MapControls";
import type { MapViewProps } from "../type/MapControlsProps";

const position: [number, number] = [59.8586, 17.6389];

export default function MapView({
  children,
  setSidebarOpen,
}: MapViewProps) {

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

      <MapControls setSidebarOpen={setSidebarOpen} />

      {children}
    </MapContainer>
  );
}