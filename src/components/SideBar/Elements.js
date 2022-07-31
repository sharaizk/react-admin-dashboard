import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const SideBarContainer = styled.div`
  height: 100%;
  background-color: #fff;
  flex: 0.225;
  border-radius: 15px;
  padding: 1rem;
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
    transition: 0.5s ease;
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

export const SideBarLogo=styled.img`
`

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
  color: ${props=>props.isNested ? '#809FB8': '#384455'};
  text-decoration: none;
  margin-bottom: 1vh;
  padding: 1rem;
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
  transition: all 0.2s ease-in;
`;

export const LinkTitleContainter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  & p {
    font-size: 0.8rem;
    margin-left: 1rem;
  }
`;

export const NestedLinks = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem 0rem;
  transition: all 0.2s ease-in;
  & a {
    margin-bottom: 0;
  }
  ::after{
    content: '';
    height: 100%;
    width: auto;
    border-left: 1px solid #000;
  }
`;

export const DropIcon = styled.div`
  position: absolute;
  top: 60%;
  left: 88%;
  transform: translateY(-50%);
`;
