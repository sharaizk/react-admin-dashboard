import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const SideBarContainer = styled.div`
  height: 100%;
  background-color: ${(props)=>props.theme.background2};
  flex: 0.225;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: auto;
  @media screen and (max-width: 768px) {
    display: none;
    position: fixed;
    z-index: 999;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    top: 0%;
    right: 0%;
    transition: right 0.5s ease;
    opacity: 100%;
    /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")}; */
    right: ${({ isOpen }) => (isOpen ? "50%" : "100%")};
    border-radius: 0;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    right: ${({ isOpen }) => (isOpen ? "10%" : "100%")};
  }
`;

export const SideBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
`;

export const SideBarLogo = styled.img``;

export const MenuBtn = styled.div`
  visibility: hidden;
  @media screen and (max-width: 768px) {
    visibility: visible;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SideBarRoutesContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem 0;
`;

export const LinkRoute = styled(NavLink)`
  font-family: "Inter", sans-serif;
  color: ${(props) => (props.isNested ? props.theme.textColor2 : props.theme.textColor)};
  text-decoration: none;
  margin-bottom: 1vh;
  padding: ${({$padding})=>($padding || '1rem')};
  border-radius: 10px;
  width: 100%;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & p {
    font-size: 0.8rem;
    margin-left: 1rem;
  }
  &.active {
    background-color: ${(props) => props.theme.background};
  }
`;

export const NestedLinkContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  font-weight: 400;
  position: relative;
  transition: height 0.2s ease-in;
  background-color: ${(props) =>
    props.isOpen ? `${props.theme.background}` : `${props.theme.background2}`};
  border-radius: 10px;
`;

export const LinkTitleContainter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  color: ${props=>props.theme.textColor};
  & p {
    font-size: 0.8rem;
    margin-left: 1rem;
  }
`;

export const NestedLinks = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: ${({ isOpen }) => (isOpen ? "1rem 0rem" : "0")};
  transition: all 1s ease;
  overflow: hidden;
  width: 100%;
  background-color: ${(props) => props.theme.background2};
  border-radius: 10px;
  margin-top: 5px;
  & a {
    margin-bottom: 0;
  }
`;

export const DropIcon = styled.div`
  position: absolute;
  top: 60%;
  left: 88%;
  transform: ${({ isOpen }) =>
    !isOpen
      ? "translateY(-40%) rotate(0deg)"
      : "translateY(-80%) rotate(-180deg)"};
  transition: all 0.2s ease-in-out;
`;

export const DropDownTitle = styled.p``;

export const BottomContainter=styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
`
