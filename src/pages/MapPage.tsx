import SearchBar from "../components/SearchBar.tsx";
import MapControls from "../components/MapControls.tsx";
import MapView from "../components/MapView.tsx";
import InfoCards from "../components/InfoCards.tsx";

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