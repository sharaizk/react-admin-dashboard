import React, { useState } from "react";
import {
  SideBarContainer,
  SideBarHeader,
  SideBarRoutesContainer,
  LinkRoute,
  MenuBtn,
  NestedLinkContainer,
  DropIcon,
  NestedLinks,
  LinkTitleContainter,
  SideBarLogo,
  DropDownTitle,
  BottomContainter,
} from "./Elements";
import { Logo } from "utils/assets";
import { useSelector, useDispatch } from "react-redux";
import { Spin as Hamburger } from "hamburger-react";
import { toggle } from "redux/reducers/layoutReducers";
import { sidebarRoutes } from "utils/sidebar.config";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import ThemeToggle from "components/ThemeToggle";
import { useTheme } from "styled-components";
const DropDownNav = ({ route, openedRoute, toggleDrop }) => {
  const dispatch = useDispatch();

  return (
    <NestedLinkContainer isOpen={openedRoute.title === route.title}>
      <LinkTitleContainter
        onClick={() => {
          toggleDrop(route.title, true);
        }}
      >
        {route.icon}
        <DropDownTitle>{route.title}</DropDownTitle>
        <DropIcon isOpen={openedRoute.title === route.title}>
          <BsChevronDown size={20} />
        </DropIcon>
      </LinkTitleContainter>
      <NestedLinks isOpen={openedRoute.title === route.title}>
        {route?.childrens?.map((children) => {
          return (
            <LinkRoute $isNested={true} onClick={()=>{
              dispatch(toggle())
            }} key={children?.id} to={children?.path}>
              <p>{children.title}</p>
            </LinkRoute>
          );
        })}
      </NestedLinks>
    </NestedLinkContainer>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const [openedRoute, setOpenedRoute] = useState({
    title: "",
    opened: false,
  });
  const { sidebarToggle } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const toggleDrop = (title, value) => {
    if (!title || !value || openedRoute.title === title) {
      setOpenedRoute({
        title: "",
        opened: false,
      });
      return;
    } else {
      setOpenedRoute({
        title: title,
        opened: value,
      });
    }
  };

  return (
    <SideBarContainer isOpen={sidebarToggle}>
      <SideBarHeader>
        <SideBarLogo src={Logo} alt="logo" />
        <MenuBtn>
          <Hamburger
            size={20}
            toggled={sidebarToggle}
            toggle={() => dispatch(toggle())}
            color={theme.buttonbg}
          />
        </MenuBtn>
      </SideBarHeader>
      <SideBarRoutesContainer>
        {sidebarRoutes?.map((route) => {
          if (!route?.childrens) {
            return (
              <LinkRoute
                onClick={() => {
                  dispatch(toggle());
                }}
                key={route?.id}
                to={route?.path}
              >
                {route.icon}
                <p>{route.title}</p>
              </LinkRoute>
            );
          }
          return (
            <DropDownNav
              route={route}
              openedRoute={openedRoute}
              setOpenedRoute={setOpenedRoute}
              toggleDrop={toggleDrop}
              key={route.id}
            />
          );
        })}
      </SideBarRoutesContainer>
      <BottomContainter>
        <LinkRoute $padding="0.5rem 1rem" $isNested={true} to={"/"}>
          <AiOutlineSetting size={22} />
          <p>Settings</p>
        </LinkRoute>
        <LinkRoute $padding="0.5rem 1rem" $isNested={true} to={"/"}>
          <AiOutlineLogout size={22} />
          <p>Log Out</p>
        </LinkRoute>
        <ThemeToggle />
      </BottomContainter>
    </SideBarContainer>
  );
};

export default Sidebar;
