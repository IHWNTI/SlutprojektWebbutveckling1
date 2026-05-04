import "./Home.css";

export default function Home() {
    return ( 
        <div>
            <nav>
                <ul>
                    <li><button><a href="/">Home</a></button></li>
                    <li><button><a href="/map">Map</a></button></li>
                </ul>
            </nav>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of my application. Use the navigation to explore different features.</p>
        </div>
     );
}