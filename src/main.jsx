import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Consultation from "./pages/Consultation";
import Store from "./pages/Store";
import Awareness from "./pages/Awareness";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/consultation" element={<Consultation />} />
      <Route path="/store" element={<Store />} />
      <Route path="/awareness" element={<Awareness />} />
    </Routes>
  </BrowserRouter>
);