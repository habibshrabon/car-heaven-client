import React from "react";
import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
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
      <Dashboard></Dashboard>
      <div
        className="py-5 col-md-10 "
        style={{ position: "absolute", right: "0", background: "#F4FDFB" }}
      >
        <h3 className="text-brand p-4 text-center">Add Service</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <input
            className="form-control"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <br />
          <textarea
            className="form-control"
            {...register("description")}
            placeholder="Description"
          />
          <br />
          <input
            className="form-control"
            type="number"
            {...register("price")}
            placeholder="price"
          />
          <br />
          <input
            className="form-control"
            {...register("img")}
            placeholder="image url"
          />
          <br />
          <input className="form-control bg-primary" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
