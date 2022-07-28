import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newColor = color === "red" ? "blue" : "red";
  const disaColor = disabled === false ? color : "gray";

  return (
    <div className="App">
      <button
        className="btn"
        style={{ backgroundColor: disaColor }}
        onClick={() => setColor(newColor)}
        disabled={disabled}
      >
        Change to {newColor}
      </button>
      <input
        type="checkbox"
        id="enable-btn-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="enable-btn-checkbox">Disable button</label>
    </div>
  );
}

export default App;
