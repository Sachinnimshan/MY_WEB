import React from "react";
import {
  PageContainer,
  PageHeader,
  ContactFormContainer,
  ContactContainer,
  ContactInfoContainer,
  ContactInfo,
  ContactInfoTitle,
  ContactInfoSubtitle,
  EmailIcon,
  AvailableHoursIcon,
  ContactBanner,
  SectionTitle,
} from "../pages.styled";
import { useForm, Controller } from "react-hook-form";
import Input from "../common/Input/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../schemas/contactSchema";
import axios from "axios";
import swal from "sweetalert";
import { useResponsive } from "../../hooks/useResponsive";
import Button from "../common/button/button";

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
        <SectionTitle mobile={mobile} marginBottom>
          LEAVE ME A MESSAGE
        </SectionTitle>
      </PageHeader>
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
        <ContactBanner
          src="https://ik.imagekit.io/ni26jldfa/pageImages/contact.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673925469388"
          alt="Contact"
        />
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

          <Button
            size="large"
            disabled={!isValid}
            marginTop
            onClick={handleSubmit(handleSubmitButton)}
          >
            Send Message
          </Button>
        </ContactFormContainer>
      </ContactContainer>
    </PageContainer>
  );
}

export default Contact;
