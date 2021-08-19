import React from "react";
import HomeSection from "./HomeSection";
import OurGifts from "./OurGifts";
import Carousle from "./Carousle";

const Home = () => {
  return (
    <div>
      <div className=''>
        <Carousle />
      </div>
      <div className="container">
        <HomeSection />
        <OurGifts />
      </div>
    </div>
  );
};
export default Home;
