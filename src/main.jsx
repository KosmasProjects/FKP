import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Czcionka hostowana razem ze stroną (bez zapytań do Google Fonts).
// Przeglądarka pobiera tylko potrzebne zakresy znaków (łaciński + polskie litery).
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./styles/global.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
