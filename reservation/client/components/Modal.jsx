import React from 'react';
import Price from './Price.jsx';
import Ratings from './Ratings.jsx';
import AirbnbButton from './AirbnbButton.jsx';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
    this.handleClose = this.handleClose.bind(this);
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
                      <div style={{marginTop: "16px", marginBottom: "16px"}}>
                        <div id="modal-divider"></div>
                      </div>
                    </section>
                    <form>
                      <div id="book-fields-placeholder">
                        <div id="modal-book-spacing">
                          <label id="book-dates">Dates</label>
                          {/* <div id="book-it-table">
                            <div id="book-it-row">

                            </div>
                          </div> */}
                        </div>
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
                      <div id="temp-margin-button">
                        <AirbnbButton name="Book"/>
                      </div>
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