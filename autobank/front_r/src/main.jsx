import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { FinanceProvider } from "./context/FinanceContext.jsx";
import { AIProvider } from "./context/AIContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <FinanceProvider>
            <AIProvider>
              <App />
            </AIProvider>
          </FinanceProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
