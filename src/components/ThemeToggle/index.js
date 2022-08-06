import React from "react";
import { ToggleContainer, ToggleBtn, ToggledBg } from "./Elements";
import { BsMoon, BsSun } from "react-icons/bs";
import { themeToggle } from "redux/reducers/layoutReducers";
import { useDispatch,useSelector } from "react-redux";
const ThemeToggle = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector(state=>state.layout)

  return (
    <ToggleContainer>
      <ToggleBtn onClick={() => dispatch(themeToggle("light"))}>
        <BsSun size={22}/>
        <p>Light Mode</p>
      </ToggleBtn>
      <ToggleBtn onClick={() => dispatch(themeToggle("dark"))}>
        <BsMoon size={21}/>
        <p>Dark Mode</p>
      </ToggleBtn>
      <ToggledBg $theme={theme}/>
    </ToggleContainer>
  );
};

export default ThemeToggle;
