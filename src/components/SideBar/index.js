import React from "react";
import {
  SideBarContainer,
  SideBarHeader,
  SideBarRoutesContainer,
  LinkRoute,
  MenuBtn,
} from "./Elements";
import { useSelector, useDispatch } from "react-redux";
import { Spin as Hamburger } from "hamburger-react";
import { toggle } from "redux/reducers/layoutReducers";
import { sidebarRoutes } from "utils/sidebar.config";


const Sidebar = () => {
  const { sidebarToggle } = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  return (
    <SideBarContainer isOpen={sidebarToggle}>
      <SideBarHeader>
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
          return null
        })}
      </SideBarRoutesContainer>
    </SideBarContainer>
  );
};

export default Sidebar;
