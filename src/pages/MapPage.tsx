import BusMarkers from "../components/BusMarkers";
import MapView from "../components/MapView";
import SettingsPanel from "../components/SettingsPanel";
import TopSearch from "../components/TopSearchBar";
import "./MapPage.css";

export default function MapPage() {
  return (
    <div className="container">
      <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/map">Map</a></li>
        </ul>
      </nav>
      <TopSearch />
      <MapView>
        <BusMarkers />
      </MapView>
      <SettingsPanel/>
    </div>

  );
}