import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as StyledTheme } from "styled-components";
import App from "./App";
import { styledComponentTheme } from "theme";
import "./index.css";
import store from "redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledTheme theme={styledComponentTheme}>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider> 
  </StyledTheme>
);
