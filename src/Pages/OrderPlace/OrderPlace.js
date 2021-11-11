import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const OrderPlace = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, []);

  const handleSubmit = () => {};
  const handleBlur = () => {};
  return (
    <div className="mt-5">
      <Container
        style={{ height: "100%" }}
        className="d-flex justify-content-center align-content-center"
      >
        <Row>
          <Col
            md={6}
            className="rounded container p-3 mb-5 bg-body rounded shadow px-5"
          >
            <img className="pb-5 rounded img-fluid" src={details.img} alt="" />
            <h3>{details.name}</h3>
            <p>{details.description}</p>
          </Col>
          <Col md={6}>
            <section className="container-fluid row">
              <form
                onSubmit={handleSubmit}
                style={{ background: "#fff" }}
                className="m-4 p-3"
              >
                <input
                  onBlur={handleBlur}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                />
                <br />
                <input
                  onBlur={handleBlur}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                />
                <br />
                <input
                  onBlur={handleBlur}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                />
                <br />
                <input
                  onBlur={handleBlur}
                  type="number"
                  className="form-control"
                  name="name"
                  placeholder="Phone"
                />
                <br />

                <button type="submit" className="btn-brand">
                  Submit
                </button>
              </form>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderPlace;
