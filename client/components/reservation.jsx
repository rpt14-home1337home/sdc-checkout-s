import React from 'react';
import Icon from './Icon.jsx';
import Property from './Property.jsx';
import Price from './Price.jsx';
import Booking from './Booking.jsx';
import Modal from './Modal.jsx';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleBooking = this.handleBooking.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleBooking() {
    this.setState({
      showModal: true
    });
  }

  handleClose() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div>
        {this.state.showModal && <Modal handleClose={this.handleClose}/>}
      <footer id="footer">
        <div id="container">
          <div id="footer-content">
            <Icon />
            <Property />
            <Price />
            <Booking handleBooking={this.handleBooking}/>
          </div>
        </div>
      </footer>
    </div>
    );
  }
}

export default Reservation;