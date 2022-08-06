import { createGlobalStyle } from "styled-components";

export const styledComponentTheme = {
  primary: "#f7fafc",
  secondary: "#1a202c",
  background: "#F7F8FA",
  background2: "#fff",
  buttonbg: "#809FB8",
  buttonhvr: "#6c8496",
  buttontext: "#fff",
  borderSimple: "rgba(209, 213, 219, 1)",
  error: "#ff0033",
  textColor: "#384455",
  textColor2: "#809FB8",
};

export const darkTheme = {
  primary: "#f7fafc",
  secondary: "#1a202c",
  background: "#2C3333",
  background2: "#395B64",
  buttonbg: "#2C3333",
  buttonhvr: "#E7F6F2",
  buttontext: "#fff",
  borderSimple: "rgba(165, 201, 202,1)",
  error: "#D8281E",
  textColor: "#A5C9CA",
  textColor2: "#E7F6F2",
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.background};
  box-sizing: border-box;
  /* transition: background-color 0.2s ease; */
}
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}`;
