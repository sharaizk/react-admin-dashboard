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

export const StyledField = styled.input`
  width: 97%;
  outline: none;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 0.5rem 0rem 0.5rem 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1vh;
`;

export const SumbitButton = styled.button`
  width: 100%;
  margin-top: 3vh;
  padding: 0.5rem 0.75rem;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.buttonbg};
  color: ${(props) => props.theme.buttontext};
  cursor: pointer;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: ${(props) => props.theme.buttonhvr};
  }
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
  color: ${(props) => props.theme.buttonbg};
`;

export const Error = styled.p`
  font-size: 0.75rem;
  text-align: start;
  margin-bottom: 1vh;
  color: #ff3d3d;
`;
