import React from 'react';
import aboutGift from '../../assets/aboutcreative.jpg';
const AboutGift = () => {
    return ( 
        <section className="about">
<div className="main">
    <img src={aboutGift} alt="about" />
    <div className="about-text">
        <h1>About</h1>
    </div>
</div>
        </section>
    );
}

export default AboutGift;