import React from 'react';
import './Leftnav.css'
import { FaArrowRight } from 'react-icons/fa';

const Leftnav = () => {
    return (
        <div className='leftnav container'>
          <div className='d-flex flex-column'>
          <h1 className='text-white'>COX'S BAZAR</h1>
            <p className='text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <div>
            <button className='btn btn-warning fw-semibold w-50 mx-auto'>Booking <FaArrowRight/></button>
            </div>
          </div>
        </div>
    );
};

export default Leftnav;