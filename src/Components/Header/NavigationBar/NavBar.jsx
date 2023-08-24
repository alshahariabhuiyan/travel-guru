import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/icons/logo.png'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const NavBar = () => {
    const { user,logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    const handleLogout =() => {
        logout()
    }
    return (
        <Navbar className='nav-container container d-flex justify-content-between'>
        <div>
            <img className='img-color-change' src={logo} alt="" style={{height:'56px'}}/>
        </div>
        <div>
            <input placeholder={` Search Your Destination`} type="text" name="text" id="text" className='rounded ps-3' style={{width:'300px',height:'40px',backgroundColor:'white', opacity:'0.8'}}/>
        </div>
        <div className='header'>
            <Link>News</Link>
            <Link>Destination</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
        </div>
        <div>
           {
            user ?
            <button onClick={handleLogout}  className='btn btn-warning px-4 fw-semibold'>LogOut</button> :
            <button onClick={handleLogin}  className='btn btn-warning px-4 fw-semibold'>Log In</button>
           }
        </div>
    </Navbar>
    );
};

export default NavBar;