import React from "react";
import "./OurGifts.css";

const OurGifts = () => {
  return (
    <div className="gift-container">
      <div className="row">
        <h1>What We Do ?</h1>
        <div className="col-md-4">
          <div className="main">
            <div className="gifts">
            <div className="gift-logo">
            <i className="fa fa-globe"/>
            </div>
              <h4 className="gift-header">Explosion Boxes</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};
export default OurGifts;
