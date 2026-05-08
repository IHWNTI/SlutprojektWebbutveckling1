import { useMap } from "react-leaflet";
import type { MapControlsProps } from "../type/MapControlsProps";

export default function MapControls({ setSidebarOpen }: MapControlsProps) {
  const map = useMap();

  const stop = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="customControls"
      onMouseDown={stop}
      onClick={stop}
      onDoubleClick={stop}
      onTouchStart={stop}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(prev => !prev);
        }}
      > Settings
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          map.zoomIn();
        }}
      >
        +
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          map.zoomOut();
        }}
      >
        -
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          map.setView([59.8586, 17.6389], 14);
        }}
      >
        Center
      </button>
    </div>
  );
}