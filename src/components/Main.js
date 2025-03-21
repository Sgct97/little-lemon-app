import React, { useReducer, useState } from 'react';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmationPage from './ConfirmationPage';

// Initialize times function - will set up initial available times
const initializeTimes = () => {
  return [
    '17:00', 
    '18:00', 
    '19:00', 
    '20:00', 
    '21:00', 
    '22:00'
  ];
};

// Reducer function for managing available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // In a real app, this would fetch times from an API based on the date
      // For now, we'll return the same times regardless of date
      return initializeTimes();
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
    setCurrentPage('confirmation');
  };

  // Form submission handler
  const submitForm = (formData) => {
    // In a real app, this would submit the form data to an API
    console.log('Form submitted:', formData);
    navigateToConfirmation(formData);
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
      
      {currentPage === 'confirmation' && (
        <ConfirmationPage 
          reservationData={bookingData} 
          navigateToHome={navigateToHome} 
        />
      )}
    </div>
  );
}

export default Main; 