import React from 'react';
import Icon from './Icon.jsx';
import Property from './Property.jsx';
import Price from './Price.jsx';
import Dates from './Dates.jsx';

const Reservation = () => (
  <footer id="footer">
    <div id="container">
      <div id="footer-content">
        <Icon/>
        <Property/>
        <Price/>
        <Dates/>
      </div>
    </div>
  </footer>
);

export default Reservation;