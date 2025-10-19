// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./theme/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>
);
