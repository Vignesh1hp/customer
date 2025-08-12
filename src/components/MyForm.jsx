import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function MyForm() {
  // 1. Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    gender: Yup.string().required("Select your gender"),
    terms: Yup.boolean()
      .oneOf([true], "You must accept the terms")
  });

  // 2. Initial form values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    terms: false
  };

  // 3. Handle form submit
  const handleSubmit = (values) => {
    console.log("Form data:", values);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* Name */}
          <label>Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="error" />

          {/* Email */}
          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className="error" />

          {/* Password */}
          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" className="error" />

          {/* Gender */}
          <label>Gender:</label>
          <Field as="select" name="gender">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
          <ErrorMessage name="gender" component="div" className="error" />

          {/* Terms */}
          <label>
            <Field type="checkbox" name="terms" />
            Accept terms & conditions
          </label>
          <ErrorMessage name="terms" component="div" className="error" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
