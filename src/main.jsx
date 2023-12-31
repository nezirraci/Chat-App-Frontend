import React from 'react'
import App from './App.jsx'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);
