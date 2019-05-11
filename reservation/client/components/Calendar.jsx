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
  }

  onDaySelect(day) {
    console.log('clicked')
    this.setState({
      startDate: day
    });
  }

  firstDayOfMOnth() {
    return moment(this.state.currentDate).startOf('month').format('d');
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

  handleNext() {
    this.setState({
      now: this.state.now.add(1, 'month')
    });
  }

  handlePrev() {
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
        'start-date-select': this.state.startDate === i
      });

      daysInMonth.push(
        <td
          key={i + this.firstDayOfMOnth()}
          onClick={ () => this.onDaySelect(i) }
          className={dayClass}
        >
          {i}
        </td>);
    }

    const totalDays = [...blankDays, ...daysInMonth];
    const weeks = [];
    let week = [];

    totalDays.forEach((day, index) => {
      week.push(day);
      if (index % 7 === 0 || index === totalDays.length - 1) {
        weeks.push(week);
        week = [];
      }
    });

    return (
      <div>
        <div id='calendar-container'>
          <button type='submit' className='previous-month-container'>
            <svg id="previous-month-arrow"></svg>
          </button>
          <div id='current-period'><strong>{this.currentMonth()} {this.currentYear()}</strong></div>
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
    );
  }
}

export default Calendar;