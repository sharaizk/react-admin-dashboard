import React from "react";
import {
  StyledForm,
  StyledField,
  SumbitButton,
  LinksContainer,
  Reset,
  Error,
} from "./Elements";
import { useFormik, FormikProvider } from "formik";
import Checkbox from "components/Checkbox";
import * as Yup from "yup";

const LoginForm = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("*Email is required"),
    password: Yup.string().required("*Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (
      values,
      { setErrors, setStatus, setSubmitting, resetForm }
    ) => {
      console.log(values);
      resetForm();
    },
  });
  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <StyledField
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          $borderBottom="none"
          {...getFieldProps("email")}
        />
        {errors.email && touched.email && errors.email && (
          <Error>{errors?.email}</Error>
        )}
        <StyledField
          type="password"
          name="password"
          value={values.password}
          placeholder="Password"
          {...getFieldProps("password")}
        />
        {errors.password && touched.password && errors.password && (
          <Error>{errors?.password}</Error>
        )}
        <LinksContainer>
          <Checkbox id={"rememberme"} label={"Remember Me"} />
          <Reset to="reset-password">Forgot Password?</Reset>
        </LinksContainer>
        <SumbitButton type="submit" disabled={isSubmitting}>
          Sign In
        </SumbitButton>
      </StyledForm>
    </FormikProvider>
  );
};

export default LoginForm;
