export default function ForecastPanel() {
  return (
    <div className="forecast-panel">
      
      <div className="pageHeader">
        Uppsala
      </div>

      <div className="forecastCard">

        {/* Vänster stor ruta */}
        <div className="currentWeather">
          <div className="weatherIcon">🌙☁️</div>

          <div className="currentInfo">
            <p className="time">Kl. 21</p>
            <h1>9°</h1>
            <p>Känns som 7°</p>
          </div>
        </div>

        {/* Höger kolumner */}
        <div className="weatherGrid">
          
          <div className="weatherCol">
            <p>Kväll</p>
            <div>🌙☁️</div>
            <h3>9°</h3>
            <p>7°</p>
            <p>4 (10) m/s</p>
            <p>0 mm</p>
          </div>

          <div className="weatherCol">
            <p>Natt</p>
            <div>🌙☁️</div>
            <h3>6°</h3>
            <p>2°</p>
            <p>2 (5) m/s</p>
            <p>0 mm</p>
          </div>

          <div className="weatherCol">
            <p>Fm</p>
            <div>🌤️</div>
            <h3>13°</h3>
            <p>3°</p>
            <p>3 (8) m/s</p>
            <p>0 mm</p>
          </div>

          <div className="weatherCol">
            <p>Em</p>
            <div>🌤️</div>
            <h3>15°</h3>
            <p>13°</p>
            <p>3 (9) m/s</p>
            <p>0 mm</p>
          </div>

        </div>

      </div>
    </div>
  );
}