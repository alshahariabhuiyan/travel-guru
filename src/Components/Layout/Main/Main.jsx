import React from 'react';
import NavBar from '../../Header/NavigationBar/NavBar';
import { Outlet } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <div className='main-container'>
            <div className="overlay">
                <div className="text">
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;