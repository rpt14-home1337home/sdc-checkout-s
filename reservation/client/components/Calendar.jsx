import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: moment(),
      today: moment(),
      startDate: this.props.startDate,
      endDate: '',
      checkoutDate: this.props.endDate,
      blockedDates: []
    };

    this.onDaySelect = this.onDaySelect.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.onDateRangeSelect = this.onDateRangeSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    fetch('http://localhost:3002/checkout')
    .then(res => res.json())
    .then((json) => {
      this.setState({
        blockedDates: json
      });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.onBlur();
  }

  onDateRangeSelect(day, date) {
    this.setState({
      endDate: date
    });
  }

  onDaySelect(day, isBlocked, isOutsideRange) {
    const dateSelected = moment([this.state.now.year(), this.state.now.month(), day])

    if (!isBlocked && this.props.type === 'check-in') {
      this.props.onDaySelect(dateSelected);
      this.setState({
        startDate: dateSelected
      });
    } else if (!isBlocked && !isOutsideRange && dateSelected >= this.state.startDate) {
      this.props.onDaySelect(dateSelected);
      this.setState({
        endDate: dateSelected,
      });
    }
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
      const dateSelected = moment([this.state.now.year(), this.state.now.month(), i])
      let isBlocked = false;
      let isOutsideRange = false;

      for (let i = 0; i < this.state.blockedDates.length; i++) {
        if (dateSelected >= moment(this.state.blockedDates[i]['checkin']) && dateSelected <= moment(this.state.blockedDates[i]['checkout'])) {
          isBlocked = true;
        }

        if (dateSelected >= moment(this.state.blockedDates[i]['checkin']) && moment(this.state.blockedDates[i]['checkout']) >= this.state.startDate) {
          isOutsideRange = true;
        }
      }

      if (dateSelected < this.state.today) {
        isBlocked = true;
      }

      const dayClass = classNames({
        'calendar-day': true,
        'blocked-day': isBlocked,
        'active-day': !isBlocked && !this.state.startDate || dateSelected < this.state.startDate && dateSelected !== this.state.endDate,
        'start-date-select': !isBlocked && dateSelected.isSame(this.state.startDate),
        'date-range-span': !isBlocked && !isOutsideRange && dateSelected > this.state.startDate && dateSelected <= this.state.endDate,
        'date-range-span-selected': !isBlocked && !isOutsideRange && dateSelected > this.state.startDate && dateSelected <= this.state.checkoutDate,
      });

      daysInMonth.push(
        <td
          key={parseInt(i) + parseInt(this.firstDayOfMOnth())}
          onMouseDown={ () => this.onDaySelect(i, isBlocked, isOutsideRange) }
          onMouseEnter={ () => this.onDateRangeSelect(i, dateSelected) }
          className={dayClass}
        >
          {i}
        </td>
      );
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
      <div id="calendar-modal" ref={node => { this.node = node; }}>
        <div id="calendar-modal-padding">
          <div id='calendar-container'>
            <button
              className='previous-month-container'
              onClick={this.handlePrev}
            >
              <svg id="previous-month-arrow"></svg>
            </button>
            <div id='current-period'><strong>{this.currentMonth()} {this.currentYear()}</strong></div>
            <button
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