import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./scss/custom.scss";
import "bootstrap/";
import "../node_modules/bootstrap";
import "../css/custom.css";

createRoot(document.getElementById("root")!).render(<App />);
