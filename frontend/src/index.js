import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // ✅ Now importing App.js instead of FactCheck.js
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
