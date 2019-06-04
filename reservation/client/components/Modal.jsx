import React from 'react';
import Price from './Price.jsx';
import Ratings from './Ratings.jsx';
import GuestModal from './GuestModal.jsx';
import Button from './AirbnbButton.jsx';
import Calendar from './Calendar.jsx';
import FacebookLogin from './FacebookLogin.jsx'
import classNames from 'classnames';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuestModal: false,
      showCalendarModal: false,
      startDate: '',
      endDate: '',
      inputActive: ''
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleBooking = this.handleBooking.bind(this);
    this.onStartDateInputSelect = this.onStartDateInputSelect.bind(this);
    this.onEndDateInputSelect = this.onEndDateInputSelect.bind(this);
    this.onCheckInDaySelect = this.onCheckInDaySelect.bind(this);
    this.onCheckOutDaySelect = this.onCheckOutDaySelect.bind(this);
    this.onCalendarBlur = this.onCalendarBlur.bind(this);
    this.onGuestModalBlur = this.onGuestModalBlur.bind(this);
  }

  onGuestModalBlur() {
    this.setState({
      showGuestModal: false
    });
  }

  onCheckInDaySelect(startDateSelected) {
    this.setState({
      startDate: startDateSelected,
      inputActive: 'check-out'
    });
  }

  onCheckOutDaySelect(endDateSelected) {
    this.setState({
      showCalendarModal: false,
      endDate: endDateSelected
    });
  }

  onStartDateInputSelect() {
    this.setState({
      showCalendarModal: true,
      inputActive: 'check-in'
    }, () => setTimeout(() => document.getElementById("calendar-modal").focus(), 0));
  }

  onEndDateInputSelect() {
    this.setState({
      showCalendarModal: true,
      inputActive: 'check-out'
    });
  }

  onCalendarBlur() {
    this.setState({
      inputActive: '',
      showCalendarModal: false
    });
  }

  handleBooking() {
    if (!this.state.startDate) {
      document.getElementById('startDate').focus();
    } else if (!this.state.endDate) {
      document.getElementById('endDate').focus();
    } else {
      fetch('http://localhost:3002/', {
        method: 'POST',
        body: JSON.stringify({
          checkin: this.state.startDate,
          checkout: this.state.endDate
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(() => {
        this.props.handleClose();
      });
    }
  }

  handleGuest(e) {
    e.preventDefault();
    this.setState({
      showGuestModal: true
    });
  }

  handleClose(e) {
    this.props.handleClose();
  }

  render() {
    return (
      <div id="modal-backdrop">
        <div id="modal-container">
          <div id="modal-cell">
            <div id="modal-content">
              <section id="modal-spacing">
                <div id="modal-button">
                  <button
                    type="button"
                    id="button-close"
                    onClick={this.handleClose}
                  >
                    <svg id="modal-close" focusable="false"></svg>
                  </button>
                </div>
                <section>
                  <div>
                    <section>
                      <Price />
                      <Ratings />
                      <div style={{marginTop: "19px", marginBottom: "19px"}}>
                        <div id="modal-divider"></div>
                      </div>
                    </section>
                    <form>
                      <div id="book-fields-placeholder">
                        <div id="modal-book-spacing">
                          <label id="book-dates">Dates</label>
                          <div id="checkout-container">
                            <div id="checkout-row">
                              <div id="checkin-input">
                                <input
                                  type="text"
                                  placeholder="Check-in"
                                  id="checkin-label"
                                  autoComplete="off"
                                  value={this.state.startDate && this.state.startDate.format('L')}
                                  onChange={(e) => console.log(e)}
                                  className={
                                    classNames({
                                      'checkin-label-select': this.state.inputActive === 'check-in'
                                    })
                                  }
                                  onClick={this.onStartDateInputSelect}
                                />
                              </div>
                              <div
                                className="next-step-checkout"
                              >
                                <svg id="next-step-checkout-arrow"></svg>
                              </div>
                              <div id="checkin-input">
                                <input
                                  type="text"
                                  placeholder="Checkout"
                                  autoComplete="off"
                                  id="checkin-label2"
                                  value={this.state.endDate && this.state.endDate.format('L')}
                                  onChange={(e) => console.log(e)}
                                  className={
                                    classNames({
                                      'checkin-label-select': this.state.inputActive === 'check-out'
                                    })
                                  }
                                  onClick={this.onEndDateInputSelect}
                                />
                                {this.state.showCalendarModal && <Calendar type={this.state.inputActive} endDate={this.state.endDate} onDaySelect={this.state.inputActive === 'check-in' ? this.onCheckInDaySelect : this.onCheckOutDaySelect} startDate={this.state.startDate} onBlur={this.onCalendarBlur}/>}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="guest-spacing">
                          <label id="guests">Guests</label>
                          <div>
                            <button
                              id="guests-placeholder"
                              onClick={this.handleGuest}
                              onBlur={this.onGuestModalBlur}
                            >
                              <div id="guest1">
                                <div id="guest2">
                                  <div id="guestcell">
                                    <div className="guest-label">1 guest</div>
                                  </div>
                                  <div id="down-arrow"></div>
                                </div>
                              </div>
                            </button>
                            <div id="modal2">
                              {this.state.showGuestModal && <GuestModal />}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="book-top-spacing"></div>
                      <Button
                        name='Book'
                        handleClick={this.handleBooking}
                      />
                      <div id="charge">You won't be charged yet</div>
                    </form>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;