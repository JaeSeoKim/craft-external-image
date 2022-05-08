import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import ConsoleProvider from "./components/ConsoleProvider";
import "./style.css";

const init = () => {
  const appNode = document.getElementById("react-root");
  ReactDOM.createRoot(appNode!).render(
    <React.StrictMode>
      <ConsoleProvider>
        <App />
      </ConsoleProvider>
    </React.StrictMode>
  );
};

init();
