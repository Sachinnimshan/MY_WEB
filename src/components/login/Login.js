import React, {useState,useEffect} from 'react';
import './login.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {userSignIn} from '../../store/actions/user';
import {Alert} from 'react-bootstrap';
import MessageBox from '../util/MessageBox';
import LoadingBox from '../util/LoadingBox';
import {Flip} from 'react-reveal';

function Login(props) {

    const dispatch = useDispatch();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const redirect = (props.location.search) ? 
    (props.location.search.split("=")[1])
    : ('/');

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(userSignIn(email,password));
    }

    const userLogin = useSelector((state)=> state.userLogin);
    const {loading, success, errors, userInfo} = userLogin;


    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[props.history, userInfo, redirect]);


    return (
        <div className='login-section'>
            <Flip left>
            <div className='login-container'>
                <div>
                <span className='login-title'>Sign In</span>
                </div>
                {loading && (<LoadingBox></LoadingBox>)}
                {errors && (<MessageBox>{errors}</MessageBox>)}
                {success && (<Alert variant="success">Login Successful</Alert>)}
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                    <label className='txt-lbl'>Email</label>
                    <input 
                    type='text' 
                    className='txt-input'
                    value={email}
                    onChange={(e)=> setemail(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                    <label className='txt-lbl'>Password</label>
                    <input 
                    type='password'
                    className='txt-input'
                    value={password}
                    onChange={(e)=> setpassword(e.target.value)}/>
                    </div>
                    <Button type='submit' variant='primary' size='md'>Log In</Button>
                </form>

                <div style={{display: 'flex', alignItems: "center", justifyContent: "space-between", flexWrap: 'wrap', gap: "0.5rem", paddingTop: '0.5rem'}}>
                <span><Link className='forget-link' to='/'>Forgot Password?</Link></span>
                <span><Link className='forget-link' to='/signup'>New User ? Create an account</Link></span>
                </div>
            </div>
            </Flip>
        </div>
    )
}

export default Login;
