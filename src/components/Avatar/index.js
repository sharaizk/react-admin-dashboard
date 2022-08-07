import React, { useState } from "react";
import {
  AvatarContainer,
  AvatarImage,
  PopoverContainer,
  ArrowContainer,
  LinkContainer,
  StyledLink,
} from "./Elements";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTheme } from "styled-components";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
const Avatar = ({ src = "", alt = "" }) => {
  const theme = useTheme();
  const [openPopOver, setOpenPopover] = useState(false);
  return (
    <AvatarContainer
      onClick={() => {
        setOpenPopover(!openPopOver);
      }}
    >
      <AvatarImage src={src} alt={alt} />
      <ArrowContainer $isOpen={openPopOver}>
        <MdKeyboardArrowDown color={theme.borderSimple} size={20} />
      </ArrowContainer>
      <PopoverContainer $isOpen={openPopOver}>
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
      </PopoverContainer>
    </AvatarContainer>
  );
};

export default Avatar;
