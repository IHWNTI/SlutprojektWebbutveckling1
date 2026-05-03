import { Routes, Route } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import MapPage from './pages/MapPage';
import Home from './pages/Home';



export default function App() {
 return (
    <Routes>
      <Route path="/map" element={<MapPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
 );
}