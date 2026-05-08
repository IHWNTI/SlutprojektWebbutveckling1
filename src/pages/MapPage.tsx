import { useState } from "react";
import BusMarkers from "../components/BusMarkers";
import MapView from "../components/MapView";
import MenuSidebar from "../components/MenuSidebar.tsx";
import TopSearchBar from "../components/TopSearchBar";
import "./MapPage.css";

export default function MapPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="map-page-container">

      <div className="main-container">
        
        <TopSearchBar />
        <MapView
          setSidebarOpen={setSidebarOpen}
        >
          <BusMarkers />
        </MapView>

        <MenuSidebar
          sidebarOpen={sidebarOpen}
        />
      </div>
    </div>
  );
}