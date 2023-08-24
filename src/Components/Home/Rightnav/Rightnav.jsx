import React, { useState } from 'react';
import './Rightnav.css'
import { addToDb } from '../../../Utilities/fakeDb/fakeDb';
import { useNavigate } from 'react-router-dom';




const Rightnav = () => {
    const [place, setPlace] = useState('')
    const navigate = useNavigate()
    const handleSundarban = () => {
        setPlace(3)
        addToDb(3)
        navigate('/book')

    }
    const handleSreemangal = () => {
        setPlace(2)
        addToDb(2)
        navigate('/book')

    }
    const handleCoxs = () => {
        setPlace(1)
        addToDb(1)
        navigate('/book')

    }

    return (
        <div className='Rightnav-container'>
            <div className="img-1" onClick={handleSundarban}>
                <h2>SUNDARBAN</h2>
            </div>
            <div className="img-2" onClick={handleSreemangal}>
                <h2>SREEMANGAL</h2>
            </div>
            <div className="img-3" onClick={handleCoxs}>
                <h2>COX'S BAZAR</h2>
            </div>
        </div>
    );
};

export default Rightnav;