import { Routes, Route } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import MapPage from './pages/MapPage';



export default function App() {
 return (
    <Routes>
      <Route path="/map" element={<MapPage />} />
    </Routes>
 );
}