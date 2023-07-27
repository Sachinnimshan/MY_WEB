import React from "react";
import {
  ContactInfo,
  ContactInfoTitle,
  ContactInfoSubtitle,
  EmailIcon,
  AvailableHoursIcon,
  ContactBanner,
  SectionTitle,
  IconWrapper,
} from "../pages.styled";
import { useForm, Controller } from "react-hook-form";
import Input from "../common/Input/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../schemas/contactSchema";
import { useResponsive } from "../../hooks/useResponsive";
import Button from "../common/button/button";
import { useDispatch } from "react-redux";
import { postMessage } from "../../store/actions/contact";
import {
  FlexContainer,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  SECONDARY_THEME_COLOR,
  YELLOW_COLOR,
} from "../../styled";

function Contact() {
  const { mobile } = useResponsive();
  const dispatch = useDispatch();
  const {
    control,
    formState: { errors, touchedFields, isValid },
    getValues,
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleClearFields = () => {
    reset();
  };

  const handleSubmitButton = async () => {
    const payload = {
      name: getValues("name"),
      email: getValues("email"),
      message: getValues("message"),
    };

    dispatch(postMessage(payload, handleClearFields));
  };

  return (
    <FlexContainer
      column
      padding={mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      gap={2}
    >
      <SectionTitle>LEAVE ME A MESSAGE</SectionTitle>
      <FlexContainer gap={2} flexwrap flex>
        <ContactBanner src="/images/contact.svg" />
        <FlexContainer gap={2} flex column>
          <ContactInfo>
            <IconWrapper size={2} color={YELLOW_COLOR}>
              <EmailIcon />
            </IconWrapper>
            <ContactInfoTitle>Email</ContactInfoTitle>
            <ContactInfoSubtitle>sachinnimshan@gmail.com</ContactInfoSubtitle>
          </ContactInfo>
          <ContactInfo>
            <IconWrapper size={2} color={YELLOW_COLOR}>
              <AvailableHoursIcon />
            </IconWrapper>
            <ContactInfoTitle>Available hours</ContactInfoTitle>
            <ContactInfoSubtitle>Monday - Friday</ContactInfoSubtitle>
            <ContactInfoSubtitle>9:00 AM - 05:00 PM</ContactInfoSubtitle>
          </ContactInfo>
        </FlexContainer>

        <FlexContainer column flex>
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
            padding="1rem"
            size={16}
            text="Send Message"
            disabled={!isValid}
            flex="0"
            onClick={handleSubmit(handleSubmitButton)}
          />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Contact;
