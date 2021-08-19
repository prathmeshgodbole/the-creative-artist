import React from "react";
import aboutGift from "../../assets/aboutcreative.jpg";
import './AboutGift.css';
const AboutGift = () => {
  return (
   
   <hr>
   <div>
    <section className="aboutgift">
      <div className="main-2">
        <img src={aboutGift} alt="Profile_Photo" />
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
    </section>
    </div>
  );
};

export default AboutGift;
