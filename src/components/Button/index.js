import React from "react";
import styled, { keyframes } from "styled-components";
const Button = ({ type, title, isLoading, disabled }) => {
  return (
    <SubmitButton $visibility={isLoading} type={type} $disabled={disabled || isLoading ? true : false}>
      <span $visibility={isLoading}>{title}</span>
    </SubmitButton>
  );
};

export default Button;

const loadingAnimation = keyframes`
  from{
    transform: rotate(0turn);
  }
  to{
    transform: rotate(1turn);
  }
`;

const SubmitButton = styled.button`
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
  position: relative;
  :hover,
  :active,
  :focus {
    background-color: ${(props) => props.theme.buttonhvr};
  }
  & span {
    visibility: ${(props) => (props.$visibility ? "hidden" : "visible")};
    opacity: ${(props) => (props.$visibility ? 0 : 1)};
  }
  pointer-events: ${(props) => (props.$disabled ? "none" : "all")};
  ::after {
    content: "";
    position: absolute;
    visibility: ${(props) => (!props.$visibility ? "hidden" : "visible")};
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #fff;
    border-right-color: #fff;
    border-radius: 50%;
    animation: ${loadingAnimation} 1s cubic-bezier(0.62, 0.58, 0.42, 0.94)
      infinite;
  }
`;
