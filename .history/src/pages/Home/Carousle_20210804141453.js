import React from "react";
import './Carousle.css';
import { Carousel } from "react-bootstrap";
import Art from '../../assets/carousle/Art.png';
import Hexagonal from "../../assets/carousle/Hexagonal.jpeg";
import Scrapbook from "../../assets/carousle/Scrapbook.jpeg";

const Carousle = () => {
  return (
    <Carousel fade>

    <Carousel.Item className='imgcarousle'>
      <img
        className="d-block w-100 h-50"
        src={Art}
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item className='imgcarousle'>
      <img
        className="d-block w-100 h-50"
        src={Hexagonal}
        alt="Second slide"
      />
  
      {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
    </Carousel.Item>

    <Carousel.Item className='imgcarousle'>
      <img
        className="d-block w-100 h-50"
        src={Scrapbook}
        alt="Third slide"
      />

      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption> */}
    </Carousel.Item>

  </Carousel>
  );
};

export default Carousle;
