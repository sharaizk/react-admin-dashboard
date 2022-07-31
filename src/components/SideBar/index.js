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
  SideBarLogo
} from "./Elements";
import { Logo } from "utils/assets";
import { useSelector, useDispatch } from "react-redux";
import { Spin as Hamburger } from "hamburger-react";
import { toggle } from "redux/reducers/layoutReducers";
import { sidebarRoutes } from "utils/sidebar.config";

const DropDownNav = ({ route, openedRoute, toggleDrop }) => {
  return (
    <NestedLinkContainer>
      <LinkTitleContainter
        onClick={() => {
          toggleDrop(route.title, true);
        }}
      >
        {route.icon}
        <p>{route.title}</p>
        <DropIcon>
          {openedRoute.title !== route.title ? route.iconDown : route.iconUp}
        </DropIcon>
      </LinkTitleContainter>
      {openedRoute.title === route.title && (
        <NestedLinks>
          {route?.childrens?.map((children) => {
            return (
              <LinkRoute isNested={true} key={children?.id} to={children?.path}>
                <p>{children.title}</p>
              </LinkRoute>
            );
          })}
        </NestedLinks>
      )}
    </NestedLinkContainer>
  );
};

const Sidebar = () => {
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
        <SideBarLogo src={Logo} alt="logo"/>
        <MenuBtn>
          <Hamburger
            size={20}
            toggled={sidebarToggle}
            toggle={() => dispatch(toggle())}
          />
        </MenuBtn>
      </SideBarHeader>
      <SideBarRoutesContainer>
        {sidebarRoutes?.map((route) => {
          if (!route?.childrens) {
            return (
              <LinkRoute key={route?.id} to={route?.path}>
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
            />
          );
        })}
      </SideBarRoutesContainer>
    </SideBarContainer>
  );
};

export default Sidebar;
