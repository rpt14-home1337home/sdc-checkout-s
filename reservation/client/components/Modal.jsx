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
      showFacebookLogin: false,
      showGuestModal: false,
      bookButtonName: 'Book',
      startDate: '',
      endDate: null,
      focusedInput: null,
      onStartDateSelect: false,
      onEndDateSelect: false,
      showStartDateModal: false,
      showEndDateModal: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleBooking = this.handleBooking.bind(this);
    this.onStartDate = this.onStartDate.bind(this);
    this.onEndDate = this.onEndDate.bind(this);
    this.onDaySelect = this.onDaySelect.bind(this);
  }

  onDaySelect(startDateSelected) {
    this.setState({
      startDate: startDateSelected
    })
  }

  onStartDate() {
    this.setState({
      onStartDateSelect: !this.state.onStartDateSelect,
      showStartDateModal: true
    });
  }

  onEndDate() {
    this.setState({
      onEndDateSelect: !this.state.onEndDateSelect
    });
  }

  handleBooking() {
    if (!this.state.startDate) {
      document.getElementById('startDate').focus();
    } else if (!this.state.endDate) {
      document.getElementById('endDate').focus();
    } else {
      this.setState({
        showFacebookLogin: true
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
    const styles = theme => ({
      textField: {
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingBottom: 0,
          marginTop: 0,
          fontWeight: 500
      },
      input: {
          color: 'white'
      }
  });


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
                                  value={this.state.startDate}
                                  onChange={(e) => console.log(e)}
                                  className={
                                    classNames({
                                      'checkin-label-select': this.state.onStartDateSelect
                                    })
                                  }
                                  onClick={this.onStartDate}
                                />
                                {this.state.showStartDateModal && <Calendar onDaySelect={this.onDaySelect}/>}
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
                                  id="checkin-label"
                                  className={
                                    classNames({
                                      'checkin-label-select': this.state.onEndDateSelect
                                    })
                                  }
                                  onClick={this.onEndDate}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="guest-spacing">
                          <label id="guests">Guests</label>
                          <div id="testtest">
                            <button
                              id="guests-placeholder"
                              onClick={this.handleGuest}
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
                        name={this.state.bookButtonName}
                        handleClick={this.handleBooking}
                      />
                      {this.state.showFacebookLogin && <FacebookLogin/>}
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