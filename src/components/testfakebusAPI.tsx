import { useEffect } from "react";

function App() {

  useEffect(() => {

    const fetchBusData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/buses");

        const data = await response.json();

        console.log("BUS DATA:", data);

      } catch (error) {
        console.error("ERROR:", error);
      }
    };

    // Kör direkt
    fetchBusData();

    // Kör varje sekund
    const interval = setInterval(fetchBusData, 1000);

    // Städning
    return () => clearInterval(interval);

  }, []);

  return (
    <div>
      <h1>Bus Tracker</h1>
    </div>
  );
}

export default App;