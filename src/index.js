import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles/globalStyleReset.styled";
import { AuthProvider } from "./context/AuthContext";
import { BooksProvider } from "./context/BooksContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="x-course-task">
      <GlobalStyle />
      <AuthProvider>
        <BooksProvider >
          <App />
        </BooksProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
