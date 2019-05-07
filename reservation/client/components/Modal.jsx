import React from 'react';
import Price from './Price.jsx';
import Ratings from './Ratings.jsx';
import GuestModal from './GuestModal.jsx';
import AirbnbButton from './AirbnbButton.jsx';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuestModal: false,
      bookButtonName: 'Book',
      startDate: null,
      endDate: null,
      focusedInput: null
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
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
                          <DateRangePicker
                            startDate={this.state.startDate}
                            startDateId='startDate'
                            endDate={this.state.endDate}
                            endDateId='endDate'
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={focusedInput => this.setState({ focusedInput })}
                            startDatePlaceholderText='Check-in'
                            endDatePlaceholderText='Checkout'
                            numberOfMonths={1}
                            verticalSpacing={12}
                            block={true}
                            showClearDates={true}
                          />
                        </div>
                        <div id="guest-spacing">
                          <label id="guests">Guests</label>
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
                      <div id="book-top-spacing"></div>
                      <AirbnbButton name={this.state.bookButtonName}/>
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