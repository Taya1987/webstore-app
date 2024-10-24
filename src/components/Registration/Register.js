import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Register.module.css";

const RegistrationSchema = Yup.object().shape({
  //Define initial values for firstname, surname, email & password and confirmPassword
  firstName: Yup.string()
    .max(15, "First Name should not exceed 15 characters")
    .required("Required"),
  surname: Yup.string()
    .max(20, "Surname should not exceed 20 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters") //validation password must be at least 8 letters
    .matches(/[a-z]/, "Must contain at least one lowercase letter") //validation password must  contain one lowercase
    .matches(/[A-Z]/, "Must contain at least one uppercase letter") //validation password must  contain one uppercase letter
    .matches(/\d/, "Must contain at least one number") //validation password must must contain at least one number
    .matches(/[!@#$%^&*]/, "Must contain at least one special character") //validation password must contain at least one special character
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match") //validation- passwords must match
    .required("Required"),
});

const RegistrationPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          surname: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegistrationSchema} //create validation schema for validation rules on all fields
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className={styles.sign_up}>
            <h1>Sign Up</h1>{" "}
            {/*Build Form- forms 'Field' and ErrorMessage' is rendered to handle all sorts of inputs and indicates when an error occurs*/}
            <div>
             <span> <label className={styles.input_label}>First Name:</label>
              <Field className={styles.input_field} name="firstName" />
              </span>
              <ErrorMessage
                className={styles.error_message}
                name="firstName"
                component="div"
              />
            </div>
            <div>
              <label className={styles.input_label}>Surname:</label>
              <Field className={styles.input_field} name="surname" />
              <ErrorMessage
                className={styles.error_message}
                name="surname"
                component="div"
              />
            </div>
            <div>
              <label className={styles.input_label}>Email:</label>
              <Field className={styles.input_field} type="email" name="email" />
              <ErrorMessage
                className={styles.error_message}
                name="email"
                component="div"
              />
            </div>
            <div>
              <label className={styles.input_label}>Password:</label>
              <Field
                className={styles.input_field}
                type="password"
                name="password"
              />
              <ErrorMessage
                className={styles.error_message}
                name="password"
                component="div"
              />
            </div>
            <div>
              <label className={styles.input_label}>Confirm Password:</label>
              <Field
                className={styles.input_field}
                type="password"
                name="confirmPassword"
              />
              <ErrorMessage
                className={styles.error_message}
                name="confirmPassword"
                component="div"
              />
            </div>
            <button className={styles.signup_btn} type="submit">Submit</button>{" "}
            {/*button for form submission ie Register/Sign Up*/}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationPage;
