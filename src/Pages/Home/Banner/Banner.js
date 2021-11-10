import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section className=" text-white hero-style d-flex align-items-center">
      <Container className="hero">
        <Row>
          <div className="col-md-5">
            <h2 className="mb-4">Lorem ipsum dolor sit amet.</h2>
            <h5 className="mb-4">hello my car world </h5>
            <button className="btn-brand">More Products</button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
