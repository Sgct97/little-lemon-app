import React, { useState } from 'react';
import '../styles/Layout.css';

function ReservationForm({ navigateToConfirmation, navigateToHome }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateToConfirmation(formData);
  };

  return (
    <div className="reservation-container">
      <div className="form-header">
        <button className="close-button" onClick={navigateToHome}>✕</button>
        <h2>Reservation</h2>
      </div>
      
      <div className="divider"></div>
      
      <div>
        <h3 style={{ color: 'var(--primary-green)', marginBottom: '20px', fontFamily: "'Markazi Text', serif", fontSize: '1.8rem' }}>Little Lemon</h3>
      </div>
      
      <div className="divider"></div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Select date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <span className="form-icon">📅</span>
        </div>
        
        <div className="form-group">
          <input
            type="time"
            className="form-control"
            placeholder="Select time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <span className="form-icon">🕒</span>
        </div>
        
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Party size"
            name="partySize"
            value={formData.partySize}
            onChange={handleChange}
            min="1"
            required
          />
          <span className="form-icon">👤</span>
        </div>
        
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <span className="form-icon">📞</span>
        </div>
        
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="form-icon">✉️</span>
        </div>
        
        <button type="submit" className="submit-button">Find a Table</button>
      </form>
    </div>
  );
}

export default ReservationForm; 