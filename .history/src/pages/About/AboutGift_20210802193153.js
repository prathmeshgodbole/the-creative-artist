import React from "react";
import aboutGift from "../../assets/aboutcreative.jpg";
import './AboutGift.css';
const AboutGift = () => {
  return (
    <div className="about">
      <div className="main">
        <img src={aboutGift} alt="about" />
        <div className="about-text">
          <h1>About Us</h1>
          <h5>Sketch Artist & Gift Maker</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nobis quod officia reprehenderit, ad quia inventore debitis
            recusandae maxime magni corporis sapiente soluta fuga quae accusamus
            cum magnam quaerat non!
          </p>
          <input type="button" value="Send" class="button" />

        </div>
      </div>
    </div>
  );
};

export default AboutGift;
