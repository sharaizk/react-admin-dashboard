import styled from "styled-components";

export const IconFieldContainer = styled.div`
  position: relative;
  margin-bottom: 1vh;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.div`
  height: 1.75rem;
  width: 1.75rem;
  padding: 4px;
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  top: 50%;
  left: 88%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 97%;
  outline: none;
  border: ${(props) =>
    !props.$error
      ? `1px solid ${props.theme.borderSimple}`
      : `1px solid ${props.theme.error}`};
  padding: 0.5rem 0rem 0.5rem 0.75rem;
  border-radius: 0.375rem;
`;
