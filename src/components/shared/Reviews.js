import React,{useEffect} from 'react';
import {getProjectReviews} from '../../store/actions/projects';
import {useDispatch, useSelector} from 'react-redux';
import LoadingBox from '../util/LoadingBox';
import MessageBox from '../util/MessageBox';
import ReviewForm from './ReviewForm';
import '../page.css';
import moment from 'moment';

function Reviews(props) {
    const dispatch = useDispatch();

    const projectReviews = useSelector((state)=> state.projectReviews);
    const {loading, errors, reviews} = projectReviews;

    useEffect(()=>{
        dispatch(getProjectReviews(props.projectID));
    }, [dispatch, props.projectID]);

    return (
      <div className="review-main-container">
        <div className="review-container">
          <div style={{display: "flex", flexDirection: "column"}}>
          <h3 className="project-lbl">Reviews</h3>
          <div className="review-banner">
            <img src="/Images/reviews.png" className="review-icon" />
            <span>100% Original reviews by coding fans all over the world</span>
          </div>
          <div className="review-item-container">
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : errors ? (
              <MessageBox></MessageBox>
            ) : (
              reviews
                .slice(0, 2)
                .sort()
                .map((review) => (
                  <div className="review">
                    <span style={{ fontSize: "18px" }}>{review.comment}</span>
                    <span style={{ fontSize: "14px" }}>{review.name}</span>
                    <span style={{ fontSize: "14px" }}>
                      {moment(review.createdAt).format('MMMM Do YYYY')}
                    </span>
                  </div>
                ))
            )}
          </div>
          </div>
          <ReviewForm projectID={props.projectID} />
        </div>
      </div>
    );
}

export default Reviews;
