import React from 'react'
import { DashboardContainer,RightSection } from './Elements'
import Sidebar from 'components/SideBar'
import Topbar from 'components/TopBar'
const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <RightSection>
        <Topbar />
      </RightSection>
    </DashboardContainer>
  )
}

export default Dashboard