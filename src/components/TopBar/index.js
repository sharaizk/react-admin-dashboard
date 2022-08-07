import React from "react";
import { TopbarContainer, MenuContainer, SearchContainer } from "./Elements";
import { Spin as Hamburger } from "hamburger-react";
import { useDispatch } from "react-redux";
import { toggle } from "redux/reducers/layoutReducers";
import ProfilePopover from "components/ProfilePopover";
import { useTheme } from "styled-components";
const Topbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <TopbarContainer>
      <MenuContainer>
        <Hamburger
          size={20}
          toggle={() => dispatch(toggle())}
          color={theme.buttonbg}
        />
      </MenuContainer>
      <SearchContainer>
        <ProfilePopover />
      </SearchContainer>
    </TopbarContainer>
  );
};

export default Topbar;
