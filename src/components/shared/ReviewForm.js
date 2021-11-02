import React from 'react';
import { Button } from 'react-bootstrap';
import './form.css';

function ReviewForm() {
    return (
        <div className='review-form-container'>
            <h3 className='form-title'>Write a Review</h3>
            <form className='form-container'>
            <div className='form-group-1'>
            <div className='form-group'>
                <label className='form-lbl'>Your Name</label>
                <input/>
            </div>
            <div className='form-group'>
                <label className='form-lbl'>Email Address</label>
                <input/>
            </div>
            </div>
            <div className='form-group'>
                <label className='form-lbl'>Comment</label>
                <textarea/>
            </div>
            <Button size='lg' variant='primary'>Submit Review</Button>
            </form>
        </div>
    )
}

export default ReviewForm;
