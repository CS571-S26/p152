import { useState } from "react";
import "./App.css";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="app">
      <h1>Moonlight Live 2026</h1>
      <h2>Featuring Aurora Vale</h2>

      <p><strong>Date:</strong> April 20, 2026</p>
      <p><strong>Time:</strong> 7:00 PM</p>
      <p><strong>Location:</strong> Madison Square Theater</p>

      <div className="button-group">
        <button onClick={() => alert("Ticket purchase coming soon!")}>
          Buy Tickets
        </button>

        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide Info" : "More Info"}
        </button>
      </div>

      {showInfo && (
        <div className="info-box">
          <h3>About the Singer</h3>
          <p>
            Aurora Vale is a pop artist known for energetic performances,
            emotional vocals, and visually stunning live shows.
          </p>

          <h3>Concert Details</h3>
          <p>
            Join us for a night of music, stage effects, and fan-favorite songs.
            Doors open at 6:00 PM and the main performance begins at 7:00 PM.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;