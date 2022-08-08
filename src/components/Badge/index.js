import React from "react";
import { BadgeContainer, BadgeNoti } from "./Elements";
const Badge = ({ children, count, onClick }) => {
  return (
    <BadgeContainer onClick={onClick}>
      {children}
      <BadgeNoti>{count}</BadgeNoti>
    </BadgeContainer>
  );
};

export default Badge;
