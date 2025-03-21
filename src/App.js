import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import ReservationForm from './components/ReservationForm';
import ConfirmationPage from './components/ConfirmationPage';
import './styles/Layout.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [reservationData, setReservationData] = useState({});

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  const navigateToReservation = () => {
    setCurrentPage('reservation');
  };

  const navigateToConfirmation = (formData) => {
    setReservationData(formData);
    setCurrentPage('confirmation');
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <HomePage navigateToReservation={navigateToReservation} />
      )}
      
      {currentPage === 'reservation' && (
        <ReservationForm 
          navigateToConfirmation={navigateToConfirmation} 
          navigateToHome={navigateToHome} 
        />
      )}
      
      {currentPage === 'confirmation' && (
        <ConfirmationPage 
          reservationData={reservationData} 
          navigateToHome={navigateToHome} 
        />
      )}
    </div>
  );
}

export default App;
