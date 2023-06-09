import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppStoreProvider from "./store/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppStoreProvider>
      <App />
    </AppStoreProvider>
  </React.StrictMode>
);
