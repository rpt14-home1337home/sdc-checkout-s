import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
    };

    const modalStyle = {
      backgroundColor: '#fff',
    };

    return (
      <div style={{backdropStyle}}>
        <div style={{modalStyle}}></div>
      </div>
    );
  }
}

export default Modal;