/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

const ManageProduct = ({ pd }) => {
  const { _id, img, name, manufactured, price, description } = pd;
  const [allOrders, setAllOrders] = useState([]);

  const handleDelete = (id) => {
    if (confirm("You are deleting an ordered package!!")) {
      const url = `https://quiet-mountain-69399.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = allOrders.filter((event) => event._id !== id);
            setAllOrders(remaining);
            window.location.reload();
          }
        });
    }
  };

  return (
    <>
      <div className="container mx-0 mx-lg-5">
        <div className="col-md-4 mb-3 ">
          <div className="card h-100 card-bg shadow img-style">
            <img
              src={img}
              style={{ height: "275px" }}
              className="card-img-top justify-content-center align-items-center img-fluid"
              alt="img"
            />
            <div className="card-body px-2">
              <h3 className="card-title text-center">{name}</h3>
              <p className="card-text">Manufactured Year: {manufactured}</p>
              <p className="card-text">{description}</p>
              <div className="d-flex justify-content-between">
                <h4>Price: $ {price}</h4>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProduct;
