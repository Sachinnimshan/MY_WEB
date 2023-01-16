import React from "react";

import { Slide } from "react-reveal";
import {
  ButtonText,
  PageContainer,
  PageHeader,
  PageMessage,
  PageTitle,
  Button,
  ContactFormContainer,
  ContactContainer,
  ContactInfoContainer,
  ContactInfo,
  ContactInfoTitle,
  ContactInfoSubtitle,
  EmailIcon,
  AvailableHoursIcon,
  ContactBanner,
} from "../pages.styled";
import { useForm, Controller } from "react-hook-form";
import Input from "../common/Input/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../schemas/contactSchema";
import axios from "axios";
import swal from "sweetalert";
import { useResponsive } from "../../hooks/useResponsive";

function Contact() {
  const { mobile } = useResponsive();
  const {
    control,
    formState: { errors, touchedFields, isValid },
    getValues,
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmitButton = async () => {
    const payload = {
      name: getValues("name"),
      email: getValues("email"),
      message: getValues("message"),
    };

    const response = await axios.post(
      "https://sn-backend.onrender.com/email/sendemail",
      payload
    );
    if (response.success) {
      swal("Good job!", "Thank You For Your Support", "success");
    } else {
      swal("Oops", "Someting Went Wrong", "error");
    }
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Contact</PageTitle>
        <PageMessage mobile={mobile}>Leave me a message</PageMessage>
      </PageHeader>
      <Slide bottom>
        <ContactContainer>
          <ContactInfoContainer>
            <ContactInfo>
              <EmailIcon />
              <ContactInfoTitle>Email</ContactInfoTitle>
              <ContactInfoSubtitle>sachinnimshan@gmail.com</ContactInfoSubtitle>
            </ContactInfo>
            <ContactInfo>
              <AvailableHoursIcon />
              <ContactInfoTitle>Available hours</ContactInfoTitle>
              <ContactInfoSubtitle>Monday - Friday</ContactInfoSubtitle>
              <ContactInfoSubtitle>9:00 AM - 05:00 PM</ContactInfoSubtitle>
            </ContactInfo>
          </ContactInfoContainer>
          <ContactBanner src="/Images/contact.png" />
          <ContactFormContainer>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  label="Your Name"
                  error={touchedFields.name && errors.name?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  label="Your Email"
                  error={touchedFields.email && errors.email?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <Input
                  label="Your Message"
                  error={touchedFields.message && errors.message?.message}
                  multiline
                  rows={3}
                  {...field}
                />
              )}
            />

            <Button onClick={handleSubmit(handleSubmitButton)} margin disabled={!isValid}>
              <ButtonText>Send Message</ButtonText>
            </Button>
          </ContactFormContainer>
        </ContactContainer>
      </Slide>
    </PageContainer>
  );
}

export default Contact;
