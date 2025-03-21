import React from 'react';
import Header from './Header';
import BookingForm from './BookingForm';
import '../styles/Layout.css';

function BookingPage({ availableTimes, dispatch, submitForm, navigateToHome }) {
  return (
    <div>
      <Header />
      <div className="booking-container">
        <div className="container">
          <div className="booking-header">
            <button className="close-button" onClick={navigateToHome}>✕</button>
            <h2>Table Reservation</h2>
          </div>
          
          <div className="divider"></div>
          
          <div className="restaurant-info">
            <h3>Little Lemon</h3>
            <p>Reserve your table now at Chicago's premier Mediterranean restaurant.</p>
          </div>
          
          <BookingForm 
            availableTimes={availableTimes} 
            dispatch={dispatch} 
            submitForm={submitForm} 
          />
        </div>
      </div>
    </div>
  );
}

export default BookingPage; 