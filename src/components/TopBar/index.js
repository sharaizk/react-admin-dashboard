import React from "react";
import { TopbarContainer, MenuContainer } from "./Elements";
import { Spin as Hamburger } from "hamburger-react";
import { useDispatch } from "react-redux";
import { toggle } from "redux/reducers/layoutReducers";
const Topbar = () => {
  const dispatch = useDispatch();
  return (
    <TopbarContainer>
      <MenuContainer>
        <Hamburger size={20} toggle={() => dispatch(toggle())} />
      </MenuContainer>
    </TopbarContainer>
  );
};

export default Topbar;
