import React from "react";
import aboutGift from "../../assets/aboutcreative.jpg";
const AboutGift = () => {
  return (
    <section className="about">
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
        </div>
      </div>
    </section>
  );
};

export default AboutGift;
