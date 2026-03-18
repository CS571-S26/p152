import { useState } from "react";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Moonlight Live 2026</h1>
      <h2>Featuring: Your Favorite Artist</h2>

      <p>Date: April 20, 2026</p>
      <p>Location: Madison, WI</p>

      <button onClick={() => alert("Ticket purchase coming soon!")}>
        Buy Tickets
      </button>

      <br /><br />

      <button onClick={() => setShowInfo(!showInfo)}>
        More Info
      </button>

      {showInfo && (
        <div>
          <h3>About the Artist</h3>
          <p>
            This artist is known for amazing live performances and hit songs.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;