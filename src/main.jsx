import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import FirebaseProvider from "@/context/Firebase.context.jsx";
import { ThemeProvider } from "@/context/Theme.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
