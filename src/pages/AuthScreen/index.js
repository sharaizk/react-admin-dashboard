import React from "react";
import {
  AuthScreenContainer,
  FormContainer,
  FormTitle,
  FormLogo,
} from "./Elements";
import LoginForm from "components/LoginForm";
import { Logo } from "utils/assets";
const AuthScreen = () => {
  return (
    <AuthScreenContainer>
      <FormContainer>
        <FormLogo src={Logo} alt="Logo" />
        <FormTitle>Sign in to your account</FormTitle>
        <LoginForm />
      </FormContainer>
    </AuthScreenContainer>
  );
};

export default AuthScreen;
