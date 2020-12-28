import React from "react";
import "./styles.css";

// These are the allowed modes, and the modes they transition to.
const TRANSITIONS = {
  off: "white",
  white: "off"
};

// These are the colors. A bulb can have a native color, as a class
// which shows through in rainbow mode. Otherwise white and off do just that.
const COLORS = {
  off: "off",
  white: "white",
  rainbow: "rainbow"
};

// Constants to get you started
const color = "off"; // rainbow|white|off
const mode = "off";

export default function App() {
  return (
    <div className="App">
      <button
        id="switch"
        onClick={() => console.log("TODO Implement mode change")}
      >
        Switch!
      </button>
      <div className="tree">
        <div className={`top light red ${color}`} />
        <div className="bottom">
          <div className={`bl light green ${color}`} />
          <div className={`br light blue ${color}`} />
        </div>
      </div>
      <div id="atts">
        <b>Mode: </b>
        {mode}
        &nbsp;
        <b>Color: </b>
        {color}
      </div>
    </div>
  );
}
