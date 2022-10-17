import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

const rootElement = ReactDOM.createRoot(
  document.getElementById("app") as HTMLElement
);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
