import React from "react";
import styled from "styled-components";
const Checkbox = ({ id, label, value, handleChange, name }) => {
  return (
    <CheckboxContainer onClick={() => handleChange(name, !value)}>
      <Checkboxx
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={Boolean(value)}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
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
    accent-color: #4bb543;
  }
`;
const Label = styled.label`
  font-size: 0.875rem;
  white-space: nowrap;
  line-height: 1.25rem;
  font-weight: 300;
  margin-left: 0.25rem;
  cursor: pointer;
  @media screen and (max-width: 280px) {
    font-size: 0.5rem;
  }
`;
