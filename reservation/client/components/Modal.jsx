import React from 'react';
import Price from './Price.jsx';
import Ratings from './Ratings.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
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
                    <Price />
                    <Ratings />
                    <div style={{marginTop: "16px", marginBottom: "16px"}}>
                      <div id="modal-divider"></div>
                    </div>
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