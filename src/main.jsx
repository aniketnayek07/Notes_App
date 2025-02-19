import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalContextProvider } from "./context/ModalContext.jsx";
import { SelectedContextProvider } from "./context/SelectedNoteContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SelectedContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </SelectedContextProvider>
  </StrictMode>
);
