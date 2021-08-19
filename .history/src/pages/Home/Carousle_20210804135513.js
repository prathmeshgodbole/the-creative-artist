import React from "react";
import 'Car'
import { Carousel } from "react-bootstrap";
import Art from "../../assets/carousle/Art.jpeg";
import Hexagonal from "../../assets/carousle/Hexagonal.jpeg";
import Scrapbook from "../../assets/carousle/Scrapbook.jpeg";

const Carousle = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Art}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Hexagonal}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={Scrapbook}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default Carousle;
