import React from "react";
import HomeSection from "./HomeSection";
import OurGifts from "./OurGifts";
import Carousle from "./Carousle";

const Home = () => {
  return (
    <div>
      <div className='home-caraousle container'>
        <Carousle />
        <HomeSection />
        <OurGifts />
      </div>
    
  );
};
export default Home;
