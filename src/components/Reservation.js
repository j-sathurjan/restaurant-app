import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './Reservation.css';


function Reservation() {
  const [reservedForm, setReservedForm]=useState([]);
  const [availableTimes,updateAvailableTimes]=useState(['17:00','18:00','19:00','20:00','21:00','22:00']);
  /*const initializeTimes = (date)=>{
    updateAvailableTimes(fetchAPI(date));
  }*/
  const [availableOccasion]=useState(['Birthday','Engagement','Anniversary']);
  const addForm=(newForm)=>{
    setReservedForm([...reservedForm,newForm]);
  }
  const removeTime=(time)=>{
    let originalArray = [...availableTimes];
    var index = originalArray.indexOf(time);
    delete originalArray[index];
    const filteredArray = originalArray.filter(element => element);
    updateAvailableTimes(filteredArray);
  }
  /*useEffect(()=>{
    let date = new Date();
    initializeTimes(date);
  })*/
  console.log(reservedForm);
  return (
    <div className='reservation-section'>
      <BookingForm addForm={addForm} availableOccasion={availableOccasion} availableTimes={availableTimes} removeTime={removeTime}/>
    </div>
  )
}

export default Reservation