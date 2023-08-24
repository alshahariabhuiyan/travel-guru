import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../../assets/images/icons/logo.png'
import './Loginnav.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Loginnav = () => {
    const {user,logout} = useContext(AuthContext)
    console.log(user)
    const handleLogout = () => {
        logout()
    }
    return (
        <div className="loginNav-container">
            <Navbar className='nav-container container d-flex justify-content-between'>
        <div>
            <img src={logo} alt="" style={{height:'56px'}}/>
        </div>
        <div className='header'>
            <Link>News</Link>
            <Link>Destination</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            <Link to="/login">Log In</Link>
        </div>
        <div className='d-flex gap-2 align-items-center'>
            <span>
                {
                    user && <p style={{display:'inline'}}>{user.email}</p>
                }
            </span>
            {
                user ?  
                <button onClick={handleLogout}  className='btn btn-warning px-4 fw-semibold'>LogOut</button> :
                <button  className='btn btn-warning px-4 fw-semibold'>Log In</button>
            }
        </div>
    </Navbar>
        </div>
    );
};

export default Loginnav;