import React from "react";
import Avatar from "components/Avatar";
import { ProfileContainer } from "./Elements";
import { profileMock } from "_mock";
import { FaRegBell } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { useTheme } from "styled-components";
import Badge from "components/Badge";
import PopOver from "components/PopOver";
const ProfilePopover = () => {
  const theme = useTheme();
  return (
    <ProfileContainer>
      <PopOver>
        <Badge count={2}>
          <BsEnvelope color={theme.borderSimple} size={20} />
        </Badge>
      </PopOver>
      <FiSettings color={theme.borderSimple} size={20} />
      <Badge count={2}>
        <FaRegBell color={theme.borderSimple} size={20} />
      </Badge>
      <Avatar src={profileMock.profileImage} alt="profile image" />
    </ProfileContainer>
  );
};

export default ProfilePopover;
