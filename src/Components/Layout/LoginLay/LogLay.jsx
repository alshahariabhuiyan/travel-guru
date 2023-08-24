import React from 'react';
import { Outlet } from 'react-router-dom';
import Loginnav from '../../Header/Loginnav/Loginnav';
import './LogLay.css'

const LogLay = () => {
    return (
        <div>
            <Loginnav></Loginnav>
            <div className='twoForm'>
            <Outlet></Outlet>
            </div>
          
        </div>
    );
};

export default LogLay;