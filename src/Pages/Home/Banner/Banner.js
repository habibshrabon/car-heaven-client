import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import car_banner from "../../../images/img_01.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
            <Link to={`/allProducts`}>
              <button className="btn-style btn px-3 ms-auto">
                More Products{" "}
                <FontAwesomeIcon className="" icon={faChevronRight} />
              </button>
            </Link>
          </Col>
          <Col md={6}>
            <img className="car__banner" src={car_banner} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
