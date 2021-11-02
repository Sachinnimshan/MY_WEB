import React,{useEffect} from 'react';
import {getProjectReviews} from '../../store/actions/projects';
import {useDispatch, useSelector} from 'react-redux';
import LoadingBox from '../util/LoadingBox';
import MessageBox from '../util/MessageBox';
import ReviewForm from './ReviewForm';
import {BiBadgeCheck} from 'react-icons/bi';
import '../page.css';

function Reviews(props) {
    const dispatch = useDispatch();

    const projectReviews = useSelector((state)=> state.projectReviews);
    const {loading, errors, reviews} = projectReviews;

    useEffect(()=>{
        dispatch(getProjectReviews(props.projectID));
    }, [dispatch, props.projectID]);

    return (
        <div className='review-main-container'>
           <div className='review-container'>
           <h3 className='project-lbl'>Reviews</h3>
           <div className='review-banner'>
               <img src='/Images/reviews.png' className='review-icon'/><span>100% Original reviews by coding fans all over the world</span>
           </div>
           <div className='review-item-container'>
           {loading ? (<LoadingBox></LoadingBox>)
            : errors ? (<MessageBox></MessageBox>)
            : (reviews.map((review)=>(
               <div className='review'>
                <span style={{fontSize: '18px'}}>{review.comment}</span>
                <span style={{fontSize: '14px'}}>{review.name}</span>
               </div>
                )))}
           </div>
             <ReviewForm/>
           </div>
          
        </div>
    )
}

export default Reviews;
