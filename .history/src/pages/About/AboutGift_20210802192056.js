import React from 'react';
import aboutGift from '../../assets/aboutcreative.jpg';
const AboutGift = () => {
    return ( 
        <section className="about">
<div className="main">
    <img src={aboutGift} alt="about" />
    <div className="about-text">
        <h1>About Us</h1>
        <h5>Sketch Artist & </h5>
    </div>
</div>
        </section>
    );
}

export default AboutGift;