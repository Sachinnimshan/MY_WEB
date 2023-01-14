import React, { useEffect } from "react";
import { getProjectReviews } from "../../store/actions/projects";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../util/LoadingBox";
import MessageBox from "../util/MessageBox";
import ReviewForm from "./ReviewForm";
import moment from "moment";
import {
  ReviewerName,
  ReviewItem,
  ReviewMainContainer,
  ReviewMessage,
  ReviewsContainer,
  ReviewsHeader,
} from "../pages.styled";

function Reviews(props) {
  const dispatch = useDispatch();

  const projectReviews = useSelector((state) => state.projectReviews);
  const { loading, errors, reviews } = projectReviews;

  useEffect(() => {
    dispatch(getProjectReviews(props.projectID));
  }, [dispatch, props.projectID]);

  return (
    <ReviewMainContainer>
      {reviews?.length > 0 && (
        <ReviewsContainer>
          <ReviewsHeader>Reviews</ReviewsHeader>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : errors ? (
            <MessageBox></MessageBox>
          ) : (
            reviews
              .slice(0, 2)
              .sort()
              .map((review) => (
                <ReviewItem>
                  <ReviewMessage>{review.comment}</ReviewMessage>
                  <ReviewerName>
                    {review.name} |{" "}
                    {moment(review.createdAt).format("MMMM Do YYYY")}
                  </ReviewerName>
                </ReviewItem>
              ))
          )}
        </ReviewsContainer>
      )}
      <ReviewForm projectID={props.projectID} />
    </ReviewMainContainer>
  );
}

export default Reviews;
