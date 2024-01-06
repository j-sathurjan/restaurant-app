import React, { useState } from 'react';
import './BookingForm.css';
import restaurantTable from '../assets/restaurant.jpg';

function BookingForm(props) {
    let today = new Date();
    let tomorrowString = `${today.getFullYear()}-${today.getMonth()<10?`0${today.getMonth()+1}`:today.getMonth()}-${today.getDate()<10?`0${today.getDate()+1}`:today.getDate()+1}`;
    const [formData,setFormData]=useState({
        date: tomorrowString,
        time:props.availableTimes[0],
        guestCount:'1',
        occasion:props.availableOccasion[0],
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.removeTime(formData.time, formData.date);
        props.addForm(formData);
        setFormData({...formData,time:props.availableTimes[1]});
    }
    return (
        <div className='booking-component'>
            <h1>Reserve Your Table!</h1>
            <div className='form-content'>
                <fieldset>
                    <legend>Table reservation form</legend>
                    <form className='booking-form' onSubmit={handleSubmit}>
                        <label htmlFor="res-date">Choose date</label>
                        <input
                            type="date"
                            id="res-date"
                            onChange={e=>{setFormData({...formData,date:e.target.value})}}
                            value={formData.date}
                        />
                        {Date.parse(formData.date)<today? 'date shoud be future':''}
                        <label htmlFor="res-time">Choose time</label>
                        <select
                            id="res-time"
                            onChange={e=>{setFormData({...formData,time:e.target.value})}}
                            value={formData.time}>
                            {props.availableTimes.map((time)=><option key={time}>{time}</option>)}
                        </select>
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            id="guests"
                            onChange={e=>{setFormData({...formData,guestCount:e.target.value})}}
                            value={formData.guestCount}
                        />
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            id="occasion"
                            onChange={e=>{setFormData({...formData,occasion:e.target.value})}}
                            value={formData.occasion}>
                            {props.availableOccasion.map((occasion)=><option key={occasion}>{occasion}</option>)}
                        </select>
                        <input type="submit" value="Make Your Reservation" disabled={(Date.parse(formData.date)<today)}/>
                    </form>
                </fieldset>
                <img className='TableImage' src={restaurantTable} alt='Restaurant Table'/>
            </div>
        </div>
    )
}

export default BookingForm