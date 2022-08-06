import React, { useEffect } from "react";
import Router from "routes/routes";
import { ThemeProvider as StyledTheme } from "styled-components";
import { styledComponentTheme, GlobalStyles, darkTheme } from "theme";
import { useSelector, useDispatch } from "react-redux";
import { getLocalTheme } from "redux/reducers/layoutReducers";
const App = () => {
  const { theme } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocalTheme());
  }, [dispatch]);
  return (
    <StyledTheme theme={theme === "light" ? styledComponentTheme : darkTheme}>
      <GlobalStyles />
      <Router />
    </StyledTheme>
  );
};

export default App;
