import ForecastPanel from "../components/ForecastPanel";
import WeatherSidebar from "../components/WeatherSidebar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <WeatherSidebar /> 
        <ForecastPanel />
      </div>
    </div>
  );
}