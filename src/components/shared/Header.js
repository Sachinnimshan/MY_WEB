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
import {FaUserCircle} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import {userSignOut} from '../../store/actions/user';

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
        <Link to='/'><IoFingerPrint style={{fontSize: "2.75rem", fontWeight: "bold", marginLeft: "1rem", color: "white"}}/></Link>
        <div onClick={showMenu}>{menu ? <IoMdCloseCircle className='menu-icon'/> : <HiOutlineMenu className='menu-icon'/>}</div>
        </div>
        <Slide top>
        <div className='header-right'>
          
          <div className={menu ? 'nav-menu active' : 'nav-menu'}>
            
            <div className='nav-left'>
             <div className='menu-item' onClick={closeMenu}><FaHome className='menu-item-icon'/><Link to='/'>Home</Link></div>
              <div className='menu-item' onClick={closeMenu}><HiLightBulb className='menu-item-icon'/><Link to='/about'>About</Link></div>
              {/* <div className='menu-item' onClick={closeMenu}><a href='#services'>Services</a></div> */}
              <div className='menu-item' onClick={closeMenu}><IoIosRocket className='menu-item-icon'/><Link to='/projects'>Projects</Link></div>
              <div className='menu-item' onClick={closeMenu}><MdMessage className='menu-item-icon'/><Link to='/contact'>Contact</Link></div>
            </div>

            {
              (userInfo) ? (<div className='menu-item' style={{display: 'flex', alignItems: "center", cursor: "pointer"}}>
                <span className='profile-name'>Hello {userInfo.name}</span><FaUserCircle onClick={handleSignOut} className='profile-icon'/></div>) : (<div className='nav-right'>
              <div className='menu-item'  onClick={closeMenu}><Link to='/signin'>Sign In</Link></div>
              <div className='menu-item'  onClick={closeMenu}><button className='btn-login'><Link style={{textDecoration: "none", color: "white",fontSize: '16px'}} to='/signup'>Sign Up</Link></button></div>
            </div>)
            }
          </div>
        </div>
        </Slide>
      </div>
    )
}

export default Header;
