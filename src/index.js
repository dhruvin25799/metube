import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/theme-context";
import { makeServer } from "./server";
import { ModalProvider } from "./context/modal-context";

// Call make Server
makeServer();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
