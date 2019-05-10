import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: moment()
    };
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

  render() {
    const blankDays = [];
    for (let i = 0; i < this.firstDayOfMOnth(); i++) {
      blankDays.push(<td key={i}></td>);
    }

    const daysInMonth = [];
    for (let i = 1; i <= this.daysInMonth(); i++) {
      daysInMonth.push(<td key={i + this.firstDayOfMOnth()} className='calendar-day'>{i}</td>);
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
        <div>{this.currentMonth()} {this.currentYear()}</div>
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