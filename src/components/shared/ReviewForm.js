import React,{useEffect, useState} from 'react';
import { Alert, Button } from 'react-bootstrap';
import './form.css';
import {useDispatch, useSelector} from 'react-redux';
import {postReviews} from '../../store/actions/projects';
import LoadingBox from '../util/LoadingBox';
import MessageBox from '../util/MessageBox';

function ReviewForm(props) {
    const dispatch = useDispatch();

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [comment, setcomment] = useState("");
    const [projectID, setProjectID] = useState(props.projectID);

    const reviewpost = useSelector((state)=> state.reviewpost);
    const {loading, errors, success, newReview} = reviewpost;

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(postReviews(name,email,comment,projectID));
    }

    useEffect(()=>{
      
    }, []);

    

    return (
        <div className='review-form-container'>
            <h3 className='form-title'>Write a Review</h3>
            {loading && (<LoadingBox></LoadingBox>)}
            {errors && (<MessageBox>{errors}</MessageBox>)}
            {success && (<Alert variant='success'>Your review posted</Alert>)}
            <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-group-1'>
            <div className='form-group'>
                <label className='form-lbl'>Your Name</label>
                <input type='text' value={name} onChange={(e)=> setname(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='form-lbl'>Email Address</label>
                <input type='text' value={email} onChange={(e)=> setemail(e.target.value)}/>
            </div>
            </div>
            <div className='form-group'>
                <label className='form-lbl'>Comment</label>
                <textarea type='text' value={comment} onChange={(e)=> setcomment(e.target.value)}/>
            </div>
            <button type="submit" className="home-btn">
                Submit
              </button>
            </form>
        </div>
    )
}

export default ReviewForm;
