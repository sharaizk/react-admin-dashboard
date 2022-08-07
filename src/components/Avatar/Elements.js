import styled from "styled-components";
import { Link } from "react-router-dom";

export const AvatarContainer = styled.div`
  height: 100%;
  /* width: 30%; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

export const AvatarImage = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 2;
`;

export const ArrowContainer = styled.div`
  height: 100%;
  width: 100%;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: transform 0.5s ease-in-out;
`;

export const PopoverContainer = styled.div`
  height: max-content;
  width: max-content;
  border-radius: 10px;
  position: absolute;
  display: flex;
  padding: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
  flex-direction: column;
  top: ${({ $isOpen }) => ($isOpen ? "140%" : "0%")};
  z-index: ${({ $isOpen }) => ($isOpen ? 0 : -1)};
  left: -140%;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  background-color: ${(props) => props.theme.background2};
  transition: top 1s ease-in-out, opacity 1s ease-in-out, z-index 1s ease-in-out;
  box-shadow: 0px 3px 7px 2px rgba(0, 0, 0, 0.27);
  -webkit-box-shadow: 0px 3px 7px 2px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 0px 3px 7px 2px rgba(0, 0, 0, 0.27);
  color: ${(props) => props.theme.textColor};
  font-size: 0.8rem;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    left: -150%;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border-bottom: 0.25px solid ${(props) => props.theme.borderSimple}; */
  padding: 0.5rem;
  & > svg {
    margin-right: 0.5rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  font-size: 0.8rem;
`;
