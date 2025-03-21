import React from 'react';
import '../styles/Layout.css';

function ConfirmationPage({ reservationData, navigateToHome }) {
  // Format the date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="confirmation-container">
      <div className="form-header">
        <button className="close-button" onClick={navigateToHome}>✕</button>
        <h2>Confirmation</h2>
      </div>
      
      <div className="confirmation-message">Your reservation is confirmed!</div>
      
      <div>
        <h3 style={{ color: 'var(--primary-green)', marginBottom: '20px', fontFamily: "'Markazi Text', serif", fontSize: '1.8rem' }}>Reservation details</h3>
        
        <div className="detail-row">
          <div className="detail-label">Date</div>
          <div>{formatDate(reservationData.date)}</div>
          <div className="action-button">Add to calendar</div>
        </div>
        
        <div className="divider"></div>
        
        <div className="detail-row">
          <div className="detail-label">Time</div>
          <div>{reservationData.time || '12:00 PM'}</div>
          <div className="action-button">Modify</div>
        </div>
        
        <div className="divider"></div>
        
        <div className="detail-row">
          <div className="detail-label">Party size</div>
          <div>{reservationData.partySize || '2'} guests</div>
          <div className="action-button">Cancel</div>
        </div>
        
        <div className="divider"></div>
        
        <div className="detail-row">
          <div className="detail-label">Contact</div>
          <div>{reservationData.phoneNumber || '+1 (415) 545-5454'}</div>
        </div>
      </div>
      
      <div>
        <h3 className="section-title">What's next?</h3>
        
        <button className="back-button" onClick={navigateToHome}>
          Return to main menu
          <span style={{ marginLeft: '5px' }}>→</span>
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage; 