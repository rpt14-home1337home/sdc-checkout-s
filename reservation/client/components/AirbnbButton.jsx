import React from 'react';

class AirbnbButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }

  render() {
    const buttonStyle = {
      backgroundColor: '#914669',
      color: '#fff',
      borderColor: 'transparent',
      borderRadius: '4px',
      borderWidth: '2px',
      fontSize: '16px',
      fontWeight: '500',
      padding: '10px 8px',
      lineHeight: '26px',
      cursor: 'pointer',
      width: '100%'
    };


    return (
      <button type="submit" onClick={this.handleClick} style={buttonStyle}>
        {this.props.name}
      </button>
    );
  }
}

export default AirbnbButton;