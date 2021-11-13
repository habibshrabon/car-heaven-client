import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Dashboard from "../Dashboard/Dashboard";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://quiet-mountain-69399.herokuapp.com/review", data)
      .then((res) => {
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
        className="py-5 col-md-10 "
        style={{ position: "absolute", right: "0", background: "#F4FDFB" }}
      >
        <h3 className=" p-4 text-center">Add Review</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <input
            className="form-control"
            {...register("name", { maxLength: 20 })}
            defaultValue={user.displayName}
          />
          <br />
          <input
            className="form-control"
            {...register("productName", { required: true, maxLength: 20 })}
            placeholder="Product Name"
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
            {...register("img")}
            placeholder="image url"
          />
          <br />
          <input className="form-control btn-style" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Review;
