import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Dashboard from "../Dashboard/Dashboard";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/products", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };

  return (
    <section className="container-fluid row">
      <Dashboard />
      <div
        className="pt-4 col-md-10"
        style={{ position: "absolute", right: "0", background: "#F4FDFB" }}
      >
        <h3 className="text-brand p-4">Review</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ background: "#fff" }}
          className="m-4 p-3 col-md-6"
        >
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Your Name"
          />
          <br />
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Product Feedback"
          />
          <br />
          <textarea
            name="textarea"
            className="form-control"
            cols="30"
            rows="5"
            placeholder="Description"
          />
          <br />
          {/* <input type="file" className="form-control" placeholder="Picture" /> */}
          <br />
          <button type="submit" className="btn-brand">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Review;
