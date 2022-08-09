import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem 0 0 0;
  border-radius: 10px;
`;

export const DashboardSection = styled.div`
  flex: 0.48;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ChartContainer = styled.div`
  flex: ${(props) => props.$flex};
  height: 100%;
  background-color: ${(props) => props.theme.background2};
  border-radius: 10px;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    flex: 1;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const CardTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  font-size: 0.9rem;
  font-weight: 500;
`;

export const CardDetail = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`
