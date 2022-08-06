import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form } from "formik";
export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;



export const LinksContainer = styled.div`
  height: 100%;
  margin-top: 0vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Reset = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${props=>props.theme.textColor};

  @media screen and (max-width: 280px) {
    font-size: 0.5rem;
  }
`;

export const Error = styled.p`
  font-size: 0.75rem;
  text-align: start;
  margin-bottom: 1vh;
  color: ${props=>props.theme.error};
`;
