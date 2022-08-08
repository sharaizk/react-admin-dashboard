import React, { useState, useRef } from "react";
import { PopOverContainer } from "./Elements";
import { createPortal } from "react-dom";
const PopOver = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const portalroot = useRef(document.getElementById("presentation"));

  const render = React.Children.map(children, (child) => {
    if (child.type.name === "PopItem") {
      return createPortal(
        React.cloneElement(child, {
          isOpen: Boolean(anchorEl),
          setOpen: setAnchorEl,
          anchorEl: anchorEl,
        }),
        portalroot.current
      );
    }
    return React.cloneElement(child, {
      onClick: (e) => {
        setAnchorEl(e.currentTarget);
      },
      isOpen: Boolean(anchorEl),
    });
  });
  return <PopOverContainer>{render}</PopOverContainer>;
};

export default PopOver;
