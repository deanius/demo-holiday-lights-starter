import { useListener, trigger, log } from "polyrhythm-react";
import React, { useState } from "react";
import "./styles.css";

const TRANSITIONS = {
  off: "white",
  white: "off"
};

const COLORS = {
  off: "off",
  white: "white"
};

const ADVANCE_MODE = "mode/advance";
const SET_COLOR = "color/set";

export default function App() {
  const [{ mode, color }, setState] = useState({ mode: "off", color: "off" });
  const setAtts = (atts) => setState((old) => ({ ...old, ...atts }));

  // log every event
  useListener(true, log);

  useListener(ADVANCE_MODE, ({ payload: { from } }) => {
    const newMode = TRANSITIONS[from];
    const newColor = COLORS[newMode];
    trigger(SET_COLOR, { color: newColor });
    setAtts({ mode: newMode });
  });

  useListener(SET_COLOR, ({ payload: { color } }) => {
    setAtts({ color });
  });

  function advanceMode() {
    trigger(ADVANCE_MODE, { from: mode });
  }

  return (
    <div className="App">
      <button id="switch" onClick={advanceMode}>
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
