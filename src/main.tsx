import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./index.css";
import App from "./App.tsx";
import "./scss/custom.scss";
import "bootstrap/";
import "../node_modules/bootstrap";
import "../css/custom.css";

let persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default persistor;
