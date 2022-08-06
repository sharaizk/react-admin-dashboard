import styled from "styled-components";

export const ToggleContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background-color: ${(props) => props.theme.background};
  position: relative;
`;

export const ToggleBtn = styled.button`
  flex: 0.5;
  height: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  & p {
    margin-left: 1vw;
    color: ${(props) => props.theme.textColor2};
  }
`;

export const ToggledBg = styled.div`
  width: 45%;
  height: 80%;
  position: absolute;
  background-color: ${(props) => props.theme.background2};
  z-index: 0;
  border-radius: 30px;
  transition: transform 0.5s ease;
  transform: ${(props) =>
    props.$theme === "light" ? "translate(0%)" : "translate(100%)"};

  @media screen and (max-width: 1024px) {
    width: 50%;
    transform: ${(props) =>
      props.$theme === "light" ? "translate(0%)" : "translate(80%)"};
  }
  @media screen and (max-width:768px) {
    width: 45%;
    transform: ${(props) =>
      props.$theme === "light" ? "translate(0%)" : "translate(100%)"};
  }
`;
