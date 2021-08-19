import React from "react";
import aboutGift from "../../assets/aboutcreative.jpg";
import './AboutGift.css';
const AboutGift = () => {
  return (
    <div class="contact-container">
      <span class="big-circle"></span>
      <img src={Shape} class="square" alt="" />
        <img src={aboutGift} alt="Profile_Photo" />
        <div className="about-text">
          <h1>About Us</h1>
          <h5>Sketch Artist <span class="span"> & Gift Maker</span></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nobis quod officia reprehenderit, ad quia inventore debitis
            recusandae maxime magni corporis sapiente soluta fuga quae accusamus
            cum magnam quaerat non!
          </p>
        </div>
      </div>
  
  );
};

export default AboutGift;
