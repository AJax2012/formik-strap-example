import * as Yup from "yup";

export const schema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  username: Yup.string()
    .min(5, "Must be at least 5 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  age: Yup.number()
    .min(18, "Must be at least 18 years or older to register")
    .required("Required"),
  street1: Yup.string().required("Required"),
  street2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  terms: Yup.boolean()
    .oneOf([true], "Must accept terms and conditions")
    .required("Must accept terms and conditions")
});
