import React from 'react';
import Button from './AirbnbButton.jsx';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.handleBooking = this.handleBooking.bind(this);
  }

  handleBooking(e) {
    console.log('Clicked');
  }

  render() {
    return (
      <div id="book-container">
        <div id="book-spacing">
        <Button name="Book"/>
        </div>
      </div>
    );
  }
}

export default Booking;