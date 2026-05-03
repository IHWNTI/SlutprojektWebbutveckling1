import BusMarkers from "../components/BusMarkers";
import MapView from "../components/MapView";
import SearchPanel from "../components/SearchPanel";
import TopSearch from "../components/TopSearchBar";
import "./MapPage.css";

export default function MapPage() {
  return (
    <div className="container">
      <TopSearch />
      <MapView>
        <BusMarkers />
      </MapView>
    
      <SearchPanel />
    </div>

  );
}