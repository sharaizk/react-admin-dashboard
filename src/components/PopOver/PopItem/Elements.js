import styled from "styled-components";

export const PopItemContainer = styled.div`
  position: fixed;
  height: max-content;
  width: max-content;
  background-color: ${(props) => props.theme.background2};
  padding: 1rem;
  border-radius: 10px;
  top: ${({ $top, $isOpen }) => `${$top + 10}px`};
  left: ${({ $left }) => `${$left}px`};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
  bottom: 0;
  right: 0;
  transition: opacity 0.5s ease;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  color: ${(props) => props.theme.textColor};
  font-size: 0.8rem;
  box-shadow: 2px 4px 10px 4px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 2px 4px 10px 4px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 2px 4px 10px 4px rgba(0, 0, 0, 0.18);
`;

export const BackDrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  bottom: 0;
`;
