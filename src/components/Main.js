import React, { useReducer, useState } from 'react';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from '../api';

// Initialize times function - will fetch available times for today's date
const initializeTimes = () => {
  // Get today's date
  const today = new Date();
  // Return available times for today
  return fetchAPI(today);
};

// Reducer function for managing available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Fetch and return available times for the selected date
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

function Main() {
  // Current page state for navigation
  const [currentPage, setCurrentPage] = useState('home');
  
  // Use reducer for available times
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  
  // Booking form data state
  const [bookingData, setBookingData] = useState({});

  // Navigation functions
  const navigateToHome = () => {
    setCurrentPage('home');
  };

  const navigateToBooking = () => {
    setCurrentPage('booking');
  };

  const navigateToConfirmation = (formData) => {
    setBookingData(formData);
    setCurrentPage('confirmed');
  };

  // Form submission handler
  const submitForm = (formData) => {
    // Submit form data to API
    const success = submitAPI(formData);
    
    if (success) {
      // If submission was successful, navigate to confirmation page
      navigateToConfirmation(formData);
    } else {
      // If submission failed, you could handle the error
      alert('Something went wrong with your reservation. Please try again.');
    }
  };

  return (
    <div className="main">
      {currentPage === 'home' && (
        <HomePage navigateToBooking={navigateToBooking} />
      )}
      
      {currentPage === 'booking' && (
        <BookingPage 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
          submitForm={submitForm} 
          navigateToHome={navigateToHome}
        />
      )}
      
      {currentPage === 'confirmed' && (
        <ConfirmedBooking 
          reservationData={bookingData} 
          navigateToHome={navigateToHome} 
        />
      )}
    </div>
  );
}

export default Main; 