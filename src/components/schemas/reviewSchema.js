import * as yup from "yup";

export const reviewSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email()
    .required("Enter a valid email address.  Ex. john.doe@gmail.com"),
  comment: yup.string().required("Please enter your comment"),
});
