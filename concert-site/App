import { useState } from "react";
import "./App.css";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="app">
      <h1>Someone's live</h1>
      <h2>Featuring someone</h2>

      <p><strong>Date:</strong> something</p>
      <p><strong>Time:</strong> 7:00 PM</p>
      <p><strong>Location:</strong> something</p>

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
            TBA
          </p>

          <h3>Concert Details</h3>
          <p>
            TBA
          </p>
        </div>
      )}
    </div>
  );
}

export default App;