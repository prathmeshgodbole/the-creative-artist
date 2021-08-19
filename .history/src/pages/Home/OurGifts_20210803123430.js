import React from "react";
import "./OurGifts.css";

const OurGifts = () => {
  return (
    <div>
      <div className="gift-container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4>
              Our <span> Gifts</span>
            </h4>
          </div>

          <div className="col-lg-4 col-sm-6">
          <div className="main">
            <div className="gifts">
            <div className="gifts-logo"></div>
                <i className="gifts-logo fa fa-globe"></i>
              <h4 className='gifts-header'>Professional Art</h4>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default OurGifts;
