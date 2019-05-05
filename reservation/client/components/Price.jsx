import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '57'
    };
  }

  getPrice() {
    //ajax call
  }

  render() {
    return (
      <div id="price">
        <div id="price-spacing">
          <div id="price-info">
            <span className="price">${this.state.price} </span>
            <span className="duration">/ night</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Price;