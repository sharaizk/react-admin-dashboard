import React, { useState } from "react";
import { PopOverContainer } from "./Elements";
import { createPortal } from "react-dom";
const portalroot = document.getElementById('presentation')
const PopOver = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const render = React.Children.map(children, (child) => {
    if (child.type.name === "PopItem") {
      return createPortal(
        React.cloneElement(child, {
          isOpen: Boolean(anchorEl),
          setOpen: setAnchorEl,
          anchorEl: anchorEl,
        }),
        portalroot
      );
    }
    return React.cloneElement(child, {
      onClick: (e) => {
        setAnchorEl(e.currentTarget);
      },
      isOpen:Boolean(anchorEl)
    });
  });
  return <PopOverContainer>{render}</PopOverContainer>;
};

export default PopOver;
