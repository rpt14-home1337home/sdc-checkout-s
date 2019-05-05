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
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 1000
    };

    const modalContainer = {
      display: 'table',
      height: '100%',
      width: '100%'
    };

    const modalCell = {
      display: 'table-cell',
      verticalAlign: 'middle',
      padding: '64px'
    };

    const modalStyle = {
      width: '100%',
      position: 'relative',
      margin: 'auto',
      backgroundColor: 'rgb(255, 255, 255)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 0px',
      maxWidth: '376px'
    };

    const modal = {
      backgroundColor: 'rgb(255, 255, 255)',
      padding: '24px',
    };

    const closeButtonStyle = {
      marginBottom: '24px'
    };

    return (
      <div style={backdropStyle}>
        <div style={modalContainer}>
          <div style={modalCell}>
            <div style={modalStyle}>
              <section style={modal}>
                <div style={closeButtonStyle}>
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