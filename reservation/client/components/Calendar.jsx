import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: moment(),
      startDate: null
    };

    this.onDaySelect = this.onDaySelect.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  onDaySelect(day) {
    this.setState({
      startDate: day
    });
    const dateSelected = moment([this.state.now.year(), this.state.now.month(), day])
    this.props.onDaySelect(dateSelected.format('L'));
  }

  firstDayOfMOnth() {
    return moment(this.state.now).startOf('month').format('d');
  }

  daysInMonth() {
    return this.state.now.daysInMonth();
  }

  weekdaysMin() {
    return (
      moment.weekdaysMin().map((day, index) => (
        <th key={index} className='weekdays-short'>{day}</th>
      ))
    );
  }

  currentMonth() {
    return this.state.now.format('MMM');
  }

  currentYear() {
    return this.state.now.format('YYYY');
  }

  handleNext(e) {
    e.preventDefault();
    this.setState({
      now: this.state.now.add(1, 'month')
    });
  }

  handlePrev(e) {
    e.preventDefault();
    this.setState({
      now: this.state.now.subtract(1, 'month')
    });
  }

  render() {
    const blankDays = [];
    for (let i = 0; i < this.firstDayOfMOnth(); i++) {
      blankDays.push(<td key={i}></td>);
    }

    const daysInMonth = [];

    for (let i = 1; i <= this.daysInMonth(); i++) {
      const dayClass = classNames({
        'calendar-day': true,
        'start-date-select': this.state.startDate === i,
        'range-date': i > this.state.startDate
      });

      daysInMonth.push(
        <td
          key={parseInt(i) + parseInt(this.firstDayOfMOnth())}
          onClick={ () => this.onDaySelect(i) }
          className={dayClass}
        >
          {i}
        </td>);
    }

    const totalDays = [...blankDays, ...daysInMonth];
    let weeks = [];
    let week = [];

    totalDays.forEach((day, index) => {
      if (index % 7 === 0) {
        weeks.push(week);
        week = [];
      }

      week.push(day);

      if (index === totalDays.length - 1) {
        weeks.push(week);
      }
    });

    return (
      <div id="calendar-modal">
        <div id="calendar-modal-padding">
          <div id='calendar-container'>
            <button
              type='submit'
              className='previous-month-container'
              onClick={this.handlePrev}
            >
              <svg id="previous-month-arrow"></svg>
            </button>
            <div id='current-period'><strong>{this.currentMonth()} {this.currentYear()}</strong></div>
            <button
              type='submit'
              className='next-month-container'
              onClick={this.handleNext}
            >
              <svg id="next-month-arrow"></svg>
            </button>
          </div>
          <table id='calendar'>
            <thead>
              <tr id='weekdays-header'>
                {this.weekdaysMin()}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, index) => (
                <tr key={index}>{week}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Calendar;