import * as Yup from "yup";

export const schema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  username: Yup.string()
    .min(5, "Must be at least 5 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Must be at least 6 characters").required(),
  website: Yup.string().url("Must be a valid URL"),
  color: Yup.string()
    .min(4, "Must be a valid color!")
    .max(7, "Must be a valid color!")
    .notRequired(),
  birthDate: Yup.date(),
  gimmeATime: Yup.string(),
  height: Yup.number(),
  street1: Yup.string().required("Required"),
  street2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  terms: Yup.boolean()
    .oneOf([true], "Must accept terms and conditions")
    .required("Must accept terms and conditions"),
  reason: Yup.string(),
  newsletter: Yup.string()
    .oneOf(["no", "weekly", "daily"], "Must choose a valid answer")
    .required("Required")
});
