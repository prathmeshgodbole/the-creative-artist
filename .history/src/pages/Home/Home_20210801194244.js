import React from "react";
import Cards from './cards';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{ padding: "100px"}}>
        Home Page
      </h1>
      <Cards/>
    </div>
  );
};
export default Home;
