import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  background-color: #fff;
  flex: 0.05;
  border-radius: 15px;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MenuContainer=styled.div`
  display: none;
  @media screen and (max-width:768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`