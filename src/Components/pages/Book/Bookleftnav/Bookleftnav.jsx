import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { deleteplaceCart } from '../../../../Utilities/fakeDb/fakeDb';



const Bookleftnav = ({ view }) => {
  
   const navigate = useNavigate()
   const handleGoBack = () => {
    navigate('/')
    deleteplaceCart()
   }
    return (
        <div className='leftnav container'>
        <div>
        <h1 className='text-white'>{view.name}</h1>
          <p className='text-white'>{view.description}</p>
          <div>
          <button onClick={handleGoBack} className='btn btn-warning fw-semibold px-4 w-25 mx-auto'>Go Back <FaArrowRight/></button>
          </div>
        </div>
      </div>
    );
};

export default Bookleftnav;
