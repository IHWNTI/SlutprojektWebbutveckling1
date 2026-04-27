import SearchBar from "../components/SearchBar";
import MapControls from "../components/MapControls";
import MapView from "../components/MapView";
import InfoCards from "../components/InfoCards";

export default function MapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* Search bar */}
      <SearchBar />

      {/* Map controls */}
      <MapControls />

      {/* Map */}
      <div className="h-[500px] w-full">
        <MapView />
      </div>

      {/* Info cards */}
      <InfoCards />

    </div>
  );
}