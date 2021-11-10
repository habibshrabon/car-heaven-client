import React from "react";
import { Carousel } from "react-bootstrap";
import car8 from "../../../images/car-8.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "auto" }}
            className="d-block w-100"
            src={car8}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>WE ARE HAPPY</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
