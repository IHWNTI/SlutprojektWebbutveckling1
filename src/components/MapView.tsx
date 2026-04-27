import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  return (
    <MapContainer center={[59.3293, 18.0686]} zoom={13} className="h-full w-full">
      
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[59.3293, 18.0686]}>
        <Popup>Stockholm</Popup>
      </Marker>

    </MapContainer>
  );
}