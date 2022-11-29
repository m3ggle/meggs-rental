import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MapProvider } from "./context/map/mapContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MapProvider>
      <App />
    </MapProvider>
  </React.StrictMode>
);
