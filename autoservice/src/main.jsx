import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductoProvider } from "./context/ProductosContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductoProvider>
    <App />
  </ProductoProvider>
);
