import React from "react";
import { DashboardContainer, RightSection } from "./Elements";
import Sidebar from "components/SideBar";
import Topbar from "components/TopBar";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <RightSection>
        <Topbar />
        <Outlet />
      </RightSection>
    </DashboardContainer>
  );
};

export default DashboardLayout;
