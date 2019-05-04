import React, { Fragment } from 'react';

const Reservation = () => (
  <div id="footer">
    <div className="home-plus" id="logo">
      <svg className="home-plus"></svg>
    </div>
    <div id="name">
      <div className="home-name">Entire Loft In Cape Town</div>
      <button className="reviews">
        <div>
          <span className="star-rating"></span>
          <span className="reviews-count">167</span>
        </div>
      </button>
    </div>
    <div id="price">
      <span className="price">$57 </span>
      <span className="duration">/ night</span>
    </div>
    <div id="book">
      <button className="book">Book</button>
    </div>
  </div>
);

export default Reservation;