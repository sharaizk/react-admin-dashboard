import React from "react";
import { IconFieldContainer, Icon, Input } from "./Elements";
const InputField = ({
  ParentIcon,
  type,
  placeholder,
  value,
  name,
  getFieldProps,
  iconFunction,
  error
}) => {
  return (
    <IconFieldContainer>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        {...getFieldProps}
        $error={error}
      />
      {ParentIcon && <Icon onClick={iconFunction}>{ParentIcon}</Icon>}
    </IconFieldContainer>
  );
};

export default InputField;
