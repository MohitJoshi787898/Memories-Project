import React, { useEffect, useState} from 'react';
import "./navbar.css";
import logo from "../../assit/memories.png";
import { Link,useLocation } from "react-router-dom"
import  {useDispatch} from "react-redux"
// import { useHistory } from "react-router-dom";


const Navbar = () => {
  
  const dispatch=useDispatch();
  const location=useLocation();
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('Profile')))
  },[location])
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("Profile")));
  const  handleLogout=()=>{
    dispatch({type:"LOGOUT"});
    setUser(null);

  }
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="logo" width='50px' />
        <h1>Memories</h1>
      </div>
      <div className='Auth'>
        {user ? (
          <div className='login'>
            <div className='user'>
              <img src={user?.result?.picture}  className='user_img' />
              <h4 className='user_name'>{user?.result?.name}</h4>
            </div>
            <div>
              <Link to="/">
                <button className='loginBtn logout'onClick={handleLogout} >LogOut</button>
              </Link>
            </div>
     
          </div>
        ) : <div >
          <Link to="/auth">
            <button className='loginBtn'>
              LogIn
            </button>
          </Link>
        </div>
        }
      </div>
    </div>

  )
}

export default Navbar   
