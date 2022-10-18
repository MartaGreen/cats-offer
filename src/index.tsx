import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../assets/fonts/Roboto/stylesheet.css";

import App from "./components/App/App";

const rootElement = ReactDOM.createRoot(
  document.getElementById("app") as HTMLElement
);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
