import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as StyledTheme } from "styled-components";
import App from "./App";
import { styledComponentTheme } from "theme";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledTheme theme={styledComponentTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyledTheme>
);
