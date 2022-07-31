import React, { useState } from "react";
import { StyledForm, LinksContainer, Reset, Error } from "./Elements";
import { useFormik, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import Checkbox from "components/Checkbox";
import InputField from "components/InputField";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "components/Button";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
      rememberme: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
        resetForm();
        navigate("/dashboard");
      }, 3000);
      // setSubmitting(true)
      // resetForm();
    },
  });
  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    setFieldValue,
  } = formik;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormikProvider value={formik}>
      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <InputField
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          $borderBottom="none"
          getFieldProps={getFieldProps("email")}
          error={Boolean(errors.email && touched.email && errors.email)}
        />
        {errors.email && touched.email && errors.email && (
          <Error>{errors?.email}</Error>
        )}
        <InputField
          type={showPassword ? "name" : "password"}
          name="password"
          ParentIcon={
            showPassword ? (
              <AiOutlineEyeInvisible size={24} />
            ) : (
              <AiOutlineEye size={24} />
            )
          }
          value={values.password}
          placeholder="Password"
          getFieldProps={getFieldProps("password")}
          iconFunction={handleShowPassword}
          error={Boolean(
            errors.password && touched.password && errors.password
          )}
        />
        {errors.password && touched.password && errors.password && (
          <Error>{errors?.password}</Error>
        )}
        <LinksContainer>
          <Checkbox
            id={"rememberme"}
            label={"Remember Me"}
            name="rememberme"
            value={values?.rememberme}
            handleChange={setFieldValue}
          />
          <Reset to="reset-password">Forgot Password?</Reset>
        </LinksContainer>
        <Button
          type="submit"
          title="Sign In"
          isLoading={isSubmitting}
          disabled={false}
        />
      </StyledForm>
    </FormikProvider>
  );
};

export default LoginForm;
