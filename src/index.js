import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { CartContextProvider } from "./contexts/CartContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <CartContextProvider>
        <App />
        <Toaster position="top-right" />
      </CartContextProvider>
    </Suspense>
  </Router>
);

reportWebVitals();
