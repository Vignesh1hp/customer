import * as Yup from "yup";

export const validateSchema = Yup.object().shape({
  type: Yup.string().required("select type"),
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("The customer name is required."),

  phone: Yup.string()
    .min(10, "Phone Number must be equal to 10")
    .required("The phone is required."),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  sort: Yup.number().positive().integer().required("Sort order is required"),

  type1: Yup.string().required("Select type"),

  add1: Yup.string().required("Address Line 1 is required for each address."),

  add2: Yup.string().required("Address Line 2 is required for each address."),

  city: Yup.string().required("City is required for each address."),

  state: Yup.string().required("Select State"),
  country: Yup.string().required("Country is required for each address"),

  postal: Yup.number()
    .positive()
    .required("Postal code is required for each address."),

  gst: Yup.string().required("GST number is required for each address."),
});
