import React, {useEffect, useState} from 'react';
import './login.css';
import {Alert, Button, Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {userSignUp} from '../../store/actions/user';
import swal from 'sweetalert';
import {Flip} from 'react-reveal';
import LoadingBox from '../util/LoadingBox';
import MessageBox from '../util/MessageBox';

function Register(props) {
    const dispatch = useDispatch();

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpwd, setconfirmpwd] = useState('');
   
    const redirect = (props.location.search) ? 
    (props.location.search.split("=")[1])
    : ('/');

    const userRegister = useSelector((state)=>state.userRegister);
    const {loading, errors, userInfo} = userRegister;

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password !== confirmpwd){
            swal("Oops", "Passwords Mistmatched", "error");
        }else{
            dispatch(userSignUp(name, email, password));
        }
    }

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[props.history, userInfo, redirect]);


    return (
        <div className='login-section'>
           <Flip right>
           <div className='login-container'>
                <div>
                <span className='login-title'>Create an account</span>
                </div>
                <form className='login-form' onSubmit={handleSubmit}>
                {loading && (<LoadingBox></LoadingBox>)}
                {errors && (<MessageBox>{errors}</MessageBox>)}
                    <div className='form-group'>
                    <label className='txt-lbl'>Name</label>
                    <input 
                    type='text' 
                    className='txt-input'
                    value={name}
                    onChange={(e)=> setname(e.target.value)}/>
                    </div>
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
                    <div className='form-group'>
                    <label className='txt-lbl'>Confirm Password</label>
                    <input 
                    type='password' 
                    className='txt-input'
                    value={confirmpwd}
                    onChange={(e)=> setconfirmpwd(e.target.value)}/>
                    </div>
                    <Button type="submit" variant='primary' size='md'>Create Account</Button>
                </form>

                <div style={{display: 'flex', alignItems: "center", justifyContent: "space-between", flexWrap: 'wrap', gap: "0.5rem", paddingTop: '0.5rem'}}>
                <span><Link className='forget-link' to='/signin'>Already have an account ? Sign In</Link></span>
                </div>
            </div>
           </Flip>
        </div>
    )
}

export default Register;
