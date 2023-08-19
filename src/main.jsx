// index.js (or App.js)
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Import your main styles
import "./App.css"; // Import the App.css file for opacity effect

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
