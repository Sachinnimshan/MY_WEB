import React, {useState} from 'react';
import '../page.css';
import {Slide} from 'react-reveal';
import {HiOutlineMenu} from 'react-icons/hi';
import {IoMdCloseCircle,IoIosRocket} from 'react-icons/io';
import {IoFingerPrint} from 'react-icons/io5';
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {HiLightBulb} from 'react-icons/hi';
import {MdMessage} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import {userSignOut} from '../../store/actions/user';
import {IoLogoInstagram} from 'react-icons/io';
import {AiOutlineFacebook, AiOutlineYoutube, AiFillGithub} from 'react-icons/ai';

function Header() {

  const dispatch = useDispatch();
  const userLogin = useSelector((state)=> state.userLogin);
  const {userInfo} = userLogin;

  const [menu, setmenu] = useState(false);
  const showMenu=()=> setmenu(!menu);
  const closeMenu=()=> setmenu(false);

  const handleSignOut=()=>{
    dispatch(userSignOut());
  }


    return (
      <div className='header-container'>
        <div className='header-top'>
        <Link to='/'><IoFingerPrint style={{fontSize: "2rem", fontWeight: "bold", marginLeft: "1rem", color: "white"}}/></Link>
        <div onClick={showMenu}>{menu ? <IoMdCloseCircle className='menu-icon'/> : <HiOutlineMenu className='menu-icon'/>}</div>
        </div>
        <Slide bottom>
        <div className='header-right'>
          
          <div className={menu ? 'nav-menu active' : 'nav-menu'}>
            
            <div className='nav-left'>
             <div className='menu-item' onClick={closeMenu}><Link to='/'>Home</Link></div>
              <div className='menu-item' onClick={closeMenu}><Link to='/about'>About</Link></div>
              <div className='menu-item' onClick={closeMenu}><Link to='/projects'>Projects</Link></div>
              <div className='menu-item' onClick={closeMenu}><Link to='/contact'>Contact</Link></div>
            </div>

            {/* {
              (userInfo) ? (<div className='menu-item' style={{display: 'flex', alignItems: "center", cursor: "pointer"}}>
                <span className='profile-name'>Hello {userInfo.name}</span><FaUserCircle onClick={handleSignOut} className='profile-icon'/></div>) : (<div className='nav-right'>
              <div className='menu-item'  onClick={closeMenu}><Link to='/signin'>Sign In</Link></div>
              <div className='menu-item'  onClick={closeMenu}><button className='btn-login'><Link style={{textDecoration: "none", color: "white",fontSize: '16px'}} to='/signup'>Sign Up</Link></button></div>
            </div>)
            } */}
            <div className="top-social-icons">
              <a href="https://www.youtube.com/@SachinNimshan">
                <AiOutlineYoutube className="social-media-icon" />
              </a>
              <a href="https://github.com/Sachinnimshan">
                <AiFillGithub className="social-media-icon" />
              </a>
              <a href="https://www.instagram.com/sachin_nimshan.06/">
                <IoLogoInstagram className="social-media-icon" />
              </a>
              <a href="https://www.facebook.com/sachin.nimshan/">
                <AiOutlineFacebook className="social-media-icon" />
              </a>
              {/* <a href='https://twitter.com/SachinNimshan'><FiTwitter className='social-media-icon'/></a>  */}
            </div>
          </div>
        </div>
        </Slide>
      </div>
    )
}

export default Header;
