import React from 'react';

const GuestModal = () => (
  <div id="guest-modal-container">
    <div className="guest-modal-spacing">
      <div className="guest-modal-spacing">
        <div className="guest-modal-table">
          <div className="guest-modal-cell">
            <div className="guest-modal-label">Adults</div>
          </div>
        </div>
      </div>

      <div className="guest-modal-spacing">
        <div className="guest-modal-table">
          <div className="guest-modal-cell">
            <div className="guest-modal-label">Children</div>
            <div className="guest-modal-label">Ages 2-12</div>
          </div>
        </div>
      </div>

      <div className="guest-modal-spacing">
        <div className="guest-modal-table">
          <div className="guest-modal-cell">
            <div className="guest-modal-label">Infants</div>
            <div className="guest-modal-label">Under 2</div>
          </div>
        </div>
      </div>

      <div id="guest-modal-bottom">
        <div id="guest-modal-info">
          3 guests maximum. Infants don’t count toward the number of guests.
        </div>
      </div>
    </div>
  </div>
);

export default GuestModal;