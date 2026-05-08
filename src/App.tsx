import { Routes, Route } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import Dashboard from "./pages/Dashboard";


export default function App() {
 return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
 );
}