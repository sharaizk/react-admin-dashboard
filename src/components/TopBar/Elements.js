import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.background2};
  flex: 0.05;
  border-radius: 15px;
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 1rem 0.5rem;
    justify-content: space-between;
  }
`;

export const MenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    flex: 0.1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
