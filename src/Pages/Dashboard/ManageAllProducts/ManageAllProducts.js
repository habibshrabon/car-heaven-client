/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Dashboard from "../Dashboard/Dashboard";

const ManageAllProducts = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  console.log("orders", orders);
  const [allOrders, setAllOrders] = useState([]);
  console.log(allOrders);

  useEffect(() => {
    const url = `https://quiet-mountain-69399.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  const handleDelete = (id) => {
    if (confirm("You are deleting an ordered package!!")) {
      const url = `https://quiet-mountain-69399.herokuapp.com/orders/${id}`;
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
    <section className="container-fluid">
      <Dashboard />
      <div
        className="py-5 col-md-10 "
        style={{ position: "absolute", right: "0", background: "#F4FDFB" }}
      >
        <div className="container mx-5">
          <div className="row">
            <div className="col">
              <h2 className="mb-5">Manage All Orders </h2>
            </div>
          </div>
          <div className="row">
            {orders.length === 0
              ? "No Order found"
              : orders.map((order) => (
                  <div className="col-md-4 mb-3 ">
                    <div className="card h-100 card-bg shadow img-style">
                      <img
                        src={order.order.img}
                        style={{ height: "275px" }}
                        className="card-img-top justify-content-center align-items-center img-fluid"
                        alt="img"
                      />
                      <div className="card-body px-2">
                        <h3 className="card-title text-center">
                          {order.order.name}
                        </h3>
                        <p className="card-text">
                          Manufactured Year: {order.order.manufactured}
                        </p>
                        <p className="card-text">{order.order.description}</p>
                        <div className="d-flex justify-content-between">
                          <h4>Price: $ {order.order.price}</h4>

                          <button
                            onClick={() => handleDelete(order._id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageAllProducts;
