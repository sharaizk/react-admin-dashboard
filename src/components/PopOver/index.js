import React from "react";
import { PopOverContainer } from "./Elements";
const PopOver = ({children}) => {
  return <PopOverContainer>
    {children}
  </PopOverContainer>;
};

export default PopOver;
