import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/Menu/Menu";
import { CityProvider } from "./context/CityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CityProvider>
      <App />
    </CityProvider>
  </React.StrictMode>
);
