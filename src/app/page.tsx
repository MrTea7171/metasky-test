"use client";
import { Box } from "@mui/material";
import React from "react";
import FormComponent from "./components/FormComponent";
import StandardButton from "./components/layouts/StandardButton";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import isAuth from "./components/auth/isAuth";
import AnimatedPage from "./components/layouts/AnimatedPage";
import { login } from "@/store/authSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  var mailformat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const handleSuccess = async (data: typeof inititalValues) => {
    localStorage.setItem("credentials", JSON.stringify(data));
    dispatch(login());
    router.push("/dashboard");
  };

  const inititalValues = {
    email: "",
    password: "",
  };
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues: inititalValues,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .matches(mailformat, "Please Enter valid email id")
        .required("This field is required"),
      password: Yup.string().required("This field is required"),
    }),
    onSubmit: handleSuccess,
  });
  return (
    <AnimatedPage>
      <Box
        display={"flex"}
        justifyContent={"center"}
        height={"90vh"}
        alignItems={"center"}
      >
        <form onSubmit={handleSubmit}>
          <Box
            width={"400px"}
            border={"2px solid #f3f3f3"}
            padding={"40px"}
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
          >
            <FormComponent
              label="Email"
              placeholder="Enter Email"
              name={"email"}
              value={values.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={Boolean(touched.email && Boolean(errors.email))}
              helperText={touched.email ? errors.email ?? "" : ""}
            />
            <FormComponent
              label="Password"
              placeholder="Enter Password"
              name={"password"}
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={Boolean(touched.password && Boolean(errors.password))}
              helperText={touched.password ? errors.password ?? "" : ""}
            />
            <StandardButton
              // onClick={handleSuccess}
              disabled={isSubmitting || !isValid}
              type="submit"
              displayText={isSubmitting ? "Authenicating..." : "Login"}
              sx={{
                width: "100%",
              }}
            />
          </Box>
        </form>
      </Box>
    </AnimatedPage>
  );
};

export default isAuth(LoginPage);
