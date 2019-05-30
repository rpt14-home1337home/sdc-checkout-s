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

    fetch('http://localhost:3002/checkout')
    .then(res => res.json())
    .then(json => console.log(json));
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
      <div id="image-container">
        <img src="https://a0.muscache.com/4ea/air/v2/pictures/7ea52b34-8177-45ab-b5ad-d1cb83b6f006.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90"/>
      </div>
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