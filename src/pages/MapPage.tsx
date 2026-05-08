import BusMarkers from "../components/BusMarkers";
import MapView from "../components/MapView";
import MenuSidebar from "../components/MenuSidebar.tsx";
import TopSearch from "../components/TopSearchBar";
import "./MapPage.css";

export default function MapPage() {
  return (
    <div className="container">
      <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/map">Map</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
      <div className="main-container">
        {/* <TopSearch /> */}
        <MapView>
          <BusMarkers />
        </MapView>
        <MenuSidebar/>
      </div>
    </div>

  );
}