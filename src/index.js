import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Modal from "react-modal";

// Attach modal root to document body
Modal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
