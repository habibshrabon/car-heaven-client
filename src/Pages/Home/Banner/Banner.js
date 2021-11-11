import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import car_banner from "../../../images/img_01.png";

const Banner = () => {
  return (
    <section className=" text-white hero-style d-flex align-items-center">
      <Container className="hero">
        <Row>
          <Col md={6}>
            <p className="text-info">TOP BRANDS 2021</p>
            <h2 className="mb-4 fw-bold">
              MODERN-CLASSIC <br /> INCREDIBLE
            </h2>
            <p className="mb-4">
              DISCOVER THE INSTANT ACCELERATION, INCREDIBLE RANGE AND NIMBLE
              HANDLING OF THE ALL-ELECTRIC NISSAN LEAF
            </p>
            <button className="btn-style btn px-3 ms-auto">
              More Products
            </button>
          </Col>
          <Col md={6}>
            <img
              style={{ height: "400px", maxWidth: "700px" }}
              className=""
              src={car_banner}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
