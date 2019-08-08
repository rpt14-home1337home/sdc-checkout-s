import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: 166
    };
  }

  render() {
    return (
      <button id="reviews">
        <div>
          <span id="star-ratings-spacing">
            <span role="img" id="star-ratings">
              <span id="property-star-ratings"></span>
            </span>
          </span>
          <span id="reviews-spacing">
            <span id="reviews-count">{this.state.reviews}</span>
          </span>
        </div>
      </button>
    );
  }
}


export default Ratings