import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReviews } from "../../store/actions/projects";
import {
  ButtonText,
  Button,
  ReviewFormContainer,
  ReviewFormHeader,
} from "../pages.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { reviewSchema } from "../schemas/reviewSchema";
import Input from "./Input/input";

function ReviewForm(props) {
  const dispatch = useDispatch();
  const [projectID, setProjectID] = useState(props.projectID);

  const {
    control,
    formState: { errors, touchedFields, isValid },
    setValue,
    getValues,
  } = useForm({
    mode: "all",
    resolver: yupResolver(reviewSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const reviewpost = useSelector((state) => state.reviewpost);

  const clearValues = () => {
    setValue("name", "");
    setValue("email", "");
    setValue("comment", "");
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    const payload = {
      name: getValues("name"),
      email: getValues("email"),
      comment: getValues("comment"),
      projectID,
    };
    dispatch(postReviews(payload));
    clearValues();
  };

  return (
    <ReviewFormContainer>
      <ReviewFormHeader>Write a review</ReviewFormHeader>
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
        name="comment"
        render={({ field }) => (
          <Input
            label="Your Comment"
            error={touchedFields.comment && errors.comment?.message}
            multiline
            rows={3}
            {...field}
          />
        )}
      />
      <Button
        type="submit"
        margin
        disabled={!isValid}
        onClick={handleSubmitButton}
      >
        <ButtonText>Submit</ButtonText>
      </Button>
    </ReviewFormContainer>
  );
}

export default ReviewForm;
