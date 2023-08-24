import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './DatePic.css'

const DatePic = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="main-date-container">
            <div className='date-main'>
            <div className='field-container'>
                <label htmlFor="origin" style={{ display: 'block' }}>Origin</label>
                <input type="text" name="origin" id="origin" />
                <label htmlFor="dest" style={{ display: 'block' }}>Destination</label>
                <input type="text" name="dest" id="dest" />
            </div>
            <div className='datepic-container'>
                <div className='datepic-1'>
                    <DatePicker

                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showYearDropdown
                        dateFormatCalendar="MMMM"
                        yearDropdownItemNumber={15}
                        scrollableYearDropdown
                    />
                </div>
                <div className='datepic-2'>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showYearDropdown
                        dateFormatCalendar="MMMM"
                        yearDropdownItemNumber={15}
                        scrollableYearDropdown
                    />
                </div>
            </div>
            <button className='btn btn-warning w-100 mt-2 fw-semibold'>Start Booking</button>
        </div>
        </div>
    );
};

export default DatePic;
