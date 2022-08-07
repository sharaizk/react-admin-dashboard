import React from "react";
import { BadgeContainer, BadgeNoti } from "./Elements";
const Badge = ({ children, count }) => {
  return (
    <BadgeContainer>
      {children}
      <BadgeNoti>{count}</BadgeNoti>
    </BadgeContainer>
  );
};

export default Badge;
