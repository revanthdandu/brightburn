import React from "react";
import "./Card.css";
// import Text from 'react-text';

function card() {
  return (
    <div className="card">
      <div className="card1">
        <div className="card__icon1">
          <img src="/icon1.png" />
        </div>
        <p>Live classes for everycourse</p>
      </div>
      <div className="card1">
        <div className="card__icon1">
          <img src="/icon2.png" />
        </div>
        <p>Every live class recordings uploaded</p>
      </div>
      <div className="card1">
        <div className="card__icon1">
          <img src="/icon4.png" />
        </div>
        <p>Recognized course certificates</p>
      </div>
      <div className="card1">
        <div className="card__icon1">
          <img src="/icon3.png" />
        </div>
        <p>24/7 Doubt clearance sessions</p>
      </div>
    </div>
  );
}

export default card;
