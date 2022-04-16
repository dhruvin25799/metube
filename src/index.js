import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();
const container = document.getElementById("root");
const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
