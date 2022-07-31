import styled from "styled-components";
export const AuthScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  height: auto;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
  padding: 2rem 2rem;
  @media screen and (max-width: 768px) {
    width: auto;
  }

  @media screen and (max-width: 280px) {
    padding: 1rem 1rem;
  }
`;

export const FormLogo = styled.img`
  margin-bottom: 3vh;
`;

export const FormTitle = styled.h2`
  font-family: "Inter", sans-serif;
  margin-bottom: 3vh;

  @media screen and (max-width: 280px) {
    font-size: 1rem;
  }
`;
