import React from 'react';
import Button from './AirbnbButton.jsx';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.handleBooking = this.handleBooking.bind(this);
  }

  handleBooking(e) {
    this.props.handleBooking();
  }

  render() {
    return (
      <div id="book-container">
        <div id="book-spacing">
        <Button
          name="Book"
          handleClick={this.handleBooking}
        />
        </div>
      </div>
    );
  }
}

export default Booking;