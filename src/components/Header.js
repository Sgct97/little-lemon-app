import React from 'react';
import '../styles/Layout.css';

function Header() {
  return (
    <header className="header">
      <div className="nav-icon">
        <span>≡</span>
      </div>
      <div className="logo">
        <img src="/little-lemon-logo.jpg" alt="Little Lemon Logo" />
      </div>
      <div className="nav-icon">
        <span>🛒</span>
      </div>
    </header>
  );
}

export default Header; 