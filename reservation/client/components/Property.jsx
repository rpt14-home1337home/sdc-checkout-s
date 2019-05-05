import React from 'react';

class Property extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Entire Loft In Cape Town',
      reviews: 166
    };
  }

  getName() {
    //ajax call
  }

  getNumberOfReviews() {
    //ajax call
  }

  render() {
    return (
      <div id="property">
        <div id="property-spacing">
          <div id="property-name">{this.state.name}</div>
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
        </div>
      </div>
    );
  }
}

export default Property;