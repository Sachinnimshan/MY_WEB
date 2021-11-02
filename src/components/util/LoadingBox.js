import React from 'react';
import {Spinner} from 'react-bootstrap';

function LoadingBox(props) {
    return (
        <div className='loading-container'>
            <Spinner size='lg' animation="border" variant="primary"/>
        </div>
    )
}

export default LoadingBox;
