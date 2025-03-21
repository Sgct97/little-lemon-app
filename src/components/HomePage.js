import React from 'react';
import Header from './Header';
import '../styles/Layout.css';

function HomePage({ navigateToReservation }) {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <div className="button-container">
                <button className="primary" onClick={navigateToReservation}>Reserve a table</button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/hero-image.jpg" alt="Little Lemon Dish" />
            </div>
          </div>
        </div>
      </section>

      <section className="order-section">
        <div className="container">
          <h2>ORDER FOR DELIVERY!</h2>
          <div className="menu-categories">
            <button className="category-button">Lunch</button>
            <button className="category-button">Mains</button>
            <button className="category-button">Desserts</button>
            <button className="category-button">A La Carte</button>
            <button className="category-button">Specials</button>
          </div>

          <div className="menu-items">
            <div className="menu-card">
              <div className="menu-card-content">
                <h3 className="menu-card-title">Greek Salad</h3>
                <p className="menu-card-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.</p>
                <p className="menu-card-price">$12.99</p>
              </div>
              <div className="menu-card-image">
                <img src="/greek-salad.jpg" alt="Greek Salad" />
              </div>
            </div>

            <div className="menu-card">
              <div className="menu-card-content">
                <h3 className="menu-card-title">Bruschetta</h3>
                <p className="menu-card-description">Our Bruschetta is made from grilled bread that has been smeared with garlic.</p>
                <p className="menu-card-price">$7.99</p>
              </div>
              <div className="menu-card-image">
                <img src="/bruschetta.jpg" alt="Bruschetta" />
              </div>
            </div>

            <div className="menu-card">
              <div className="menu-card-content">
                <h3 className="menu-card-title">Grilled Fish</h3>
                <p className="menu-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="menu-card-price">$18.99</p>
              </div>
              <div className="menu-card-image">
                <img src="/grilled-fish.jpg" alt="Grilled Fish" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage; 