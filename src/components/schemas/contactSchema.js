import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email()
    .required("Enter a valid email address.  Ex. john.doe@gmail.com"),
  message: yup.string().required("Please enter your message"),
});
