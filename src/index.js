import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PageProvider } from "./usePages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </React.StrictMode>
);
