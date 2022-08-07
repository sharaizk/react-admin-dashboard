import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const RightSection = styled.div`
  height: 100%;
  flex: 0.75;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width:768px) {
    flex: 1;
  }
`;
