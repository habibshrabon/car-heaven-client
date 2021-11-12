import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Dashboard from "../Dashboard/Dashboard";

const ManageAllProducts = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    const url = `http://localhost:5000/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  return (
    <section className="container-fluid row">
      <Dashboard />

      <div
        className="py-5 col-md-10 "
        style={{ position: "absolute", right: "0", background: "#F4FDFB" }}
      >
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

                      <Link to={`/orderPlace/${order.order._id}`}>
                        <button className="btn btn-style px-3">Delete</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default ManageAllProducts;
