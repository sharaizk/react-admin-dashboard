import React from "react";
import styled from "styled-components";
const Checkbox = ({ id, label }) => {
  return (
    <CheckboxContainer>
      <Checkboxx type="checkbox" id={id} />
      <Label>{label}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;

const CheckboxContainer = styled.div`
  display: flex;
  flex: 0.5;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const Checkboxx = styled.input`
  cursor: pointer;

  :checked {
    accent-color: #4BB543;
  }
`;
const Label = styled.label`
  font-size: 0.875rem;
  white-space: nowrap;
  line-height: 1.25rem;
  font-weight: 300;
  margin-left: 0.25rem;
  cursor: pointer;
`;
