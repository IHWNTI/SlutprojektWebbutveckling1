import { useState, useEffect } from "react";
import { getBuses } from "../api/fakeApi";
import type { Bus } from "../type/bus";
import { Marker, Popup } from "react-leaflet";

export default function BusMarkers() {
  const [buses, setBuses] = useState<Bus[]>([]);

  useEffect(() => {
    getBuses().then((data) => setBuses(data as Bus[]));
  }, []);

  return (
    <>
      {buses.map((bus) => (
        <Marker key={bus.id} position={bus.position}>
          <Popup>Buss {bus.line}</Popup>
        </Marker>
      ))}
    </>
  );
}