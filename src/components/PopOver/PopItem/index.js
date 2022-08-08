import React, { useLayoutEffect, useRef, useState } from "react";
import { PopItemContainer, BackDrop } from "./Elements";

const getPosition = (anchorRect, selfRect, anchorOrigin) => {
  let selfLeft = 0;
  let selfTop = 0;

  // if (anchorRect && selfRect) {
    selfLeft = anchorRect?.left;
    selfTop = anchorRect?.bottom;
  // }

  return {
    selfLeft,
    selfTop,
  };
};

const PopItem = ({
  children,
  isOpen,
  setOpen,
  anchorEl,
  anchorOrigin = {
    horizontal: "left",
    vertical: "bototm",
  },
}) => {
  const [anchorRect, setAnchorRect] = useState(null);
  const [selfRect, setSelfRect] = useState(null);
  const ref = useRef(null);
  useLayoutEffect(() => {
    const handler = () => {
      if (ref.current) {
        setSelfRect(ref.current.getBoundingClientRect());
      }
      if (anchorEl) {
        setAnchorRect(anchorEl.getBoundingClientRect());
      }
    };
    handler();
  }, [anchorEl]);

  const { selfLeft, selfTop } = getPosition(anchorRect, selfRect, anchorOrigin);
  return (
    <>
      {isOpen && <BackDrop onClick={() => setOpen(null)} />}
      <PopItemContainer
        ref={ref}
        $isOpen={isOpen}
        $left={selfLeft}
        $top={selfTop}
      >
        {children}
      </PopItemContainer>
    </>
  );
};
export default PopItem;
PopItem.displayName='PopItem'
