import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return ( 
        <div>
            <nav>
                <ul>
                    <li><button><Link to="/">Home</Link></button></li>
                    <li><button><Link to="/map">Map</Link></button></li>
                </ul>
            </nav>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of my application. Use the navigation to explore different features.</p>
        </div>
     );
}