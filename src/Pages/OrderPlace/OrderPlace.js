import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const OrderPlace = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`https://quiet-mountain-69399.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, [id]);

  const onSubmit = (userInfo) => {
    const eventDetails = details;
    userInfo.order = eventDetails;

    fetch("https://quiet-mountain-69399.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order Confirmed Successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <Navigation />
      <div className="mt-5">
        <h2 className="mt-5 pt-5 text-center fw-bold">Order Placed Here</h2>
        <Container
          style={{ height: "100%" }}
          className="d-flex justify-content-center align-content-center"
        >
          <Row>
            <Col md={6} className="container my-5 bg-body rounded shadow">
              <img
                style={{ height: "396px" }}
                className="rounded img-fluid"
                src={details.img}
                alt=""
              />
              <h3>Product Name: {details.name}</h3>
              <h4>Price: ${details.price}</h4>
            </Col>
            <Col md={6}>
              <section className="container-fluid row shadow mx-0 mx-lg-5 mt-5">
                <div className="add-package mt-5 form-bg">
                  <h2 className="text-center">Submit Form</h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="text-center box-shadow mb-5 mt-5"
                  >
                    <input
                      className="form-control"
                      {...register("name", { required: true })}
                      value={user.displayName}
                    />
                    <br />
                    <input
                      className="form-control"
                      {...register("email", { required: true })}
                      value={user.email}
                    />
                    <br />

                    <input
                      className="form-control"
                      {...register("address", { required: true })}
                      placeholder="Address"
                    />
                    <br />
                    <input
                      className="form-control"
                      {...register("phone", { required: true })}
                      placeholder="Phone Number"
                    />
                    <br />
                    <button type="submit" className="btn btn-style px-3">
                      Submit
                    </button>
                  </form>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPlace;
