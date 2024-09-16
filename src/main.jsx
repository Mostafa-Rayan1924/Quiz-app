import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import QuestionsState from "./contexts/QuestionsState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuestionsState>
      <App />
    </QuestionsState>
  </StrictMode>
);
