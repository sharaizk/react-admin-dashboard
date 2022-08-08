import React from "react";
import {
  AvatarContainer,
  AvatarImage,
  ArrowContainer,
  LinkContainer,
  StyledLink,
} from "./Elements";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTheme } from "styled-components";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import PopOver from "components/PopOver";
import PopItem from "components/PopOver/PopItem";
const Avatar = ({ src = "", alt = "", isOpen, onClick }) => {
  const theme = useTheme();
  return (
    <PopOver>
      <AvatarContainer onClick={onClick}>
        <AvatarImage src={src} alt={alt} />
        <ArrowContainer $isOpen={isOpen}>
          <MdKeyboardArrowDown color={theme.borderSimple} size={20} />
        </ArrowContainer>
      </AvatarContainer>
      <PopItem>
        <LinkContainer>
          <MdOutlineManageAccounts size={20} />
          <StyledLink to="/dashboard/account-setting">
            Account Settings
          </StyledLink>
        </LinkContainer>
        <LinkContainer>
          <AiOutlineLogout size={20} />
          <p>Log Out</p>
        </LinkContainer>
      </PopItem>
    </PopOver>
  );
};

export default Avatar;
