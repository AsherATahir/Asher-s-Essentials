import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./scss/custom.scss";
import "bootstrap/";
import "../node_modules/bootstrap";
import "../css/custom.css";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
