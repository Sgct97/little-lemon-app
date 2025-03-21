import React from 'react';
import '../styles/Layout.css';

function ConfirmedBooking({ reservationData, navigateToHome }) {
  return (
    <div className="confirmation-container">
      <div className="form-header">
        <button className="close-button" onClick={navigateToHome}>✕</button>
        <h2>Booking Confirmed!</h2>
      </div>
      
      <div className="confirmation-message">
        <p>Your reservation has been confirmed.</p>
        <p>Thank you for choosing Little Lemon!</p>
      </div>
      
      {reservationData && (
        <div className="reservation-details">
          <h3>Reservation Details</h3>
          <div className="detail-item">
            <span>Name:</span> {reservationData.name}
          </div>
          <div className="detail-item">
            <span>Date:</span> {new Date(reservationData.date).toLocaleDateString()}
          </div>
          <div className="detail-item">
            <span>Time:</span> {reservationData.time}
          </div>
          <div className="detail-item">
            <span>Number of guests:</span> {reservationData.guests}
          </div>
          <div className="detail-item">
            <span>Occasion:</span> {reservationData.occasion || 'Regular dining'}
          </div>
          <div className="detail-item">
            <span>Email:</span> {reservationData.email}
          </div>
          <div className="detail-item">
            <span>Phone:</span> {reservationData.phone}
          </div>
        </div>
      )}
      
      <button className="primary-button" onClick={navigateToHome}>
        Return to Home
      </button>
    </div>
  );
}

export default ConfirmedBooking; 