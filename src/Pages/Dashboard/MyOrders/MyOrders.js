/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Dashboard from "../Dashboard/Dashboard";

const MyOrders = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const userOrders = allOrders.filter((orders) => orders.email === user.email);

  const handleDelete = (id) => {
    if (confirm("You are deleting an ordered package!!")) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = allOrders.filter((event) => event._id !== id);
            setAllOrders(remaining);
          }
        });
    }
  };
  return (
    <section className="container-fluid row">
      <Dashboard />
      <div
        className="py-5 col-md-10 "
        style={{ position: "absolute", right: "0", background: "#F4FDFB" }}
      >
        <Table striped bordered hover className="p-3 shadow">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Cancel</th>
            </tr>
          </thead>

          {userOrders.length === 0
            ? "No Order found"
            : userOrders.map((order) => (
                <tbody key={order._id}>
                  <tr>
                    <td>{order.order.name}</td>
                    <td>{order.order.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="btn btn-danger"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
        </Table>
      </div>
    </section>
  );
};

export default MyOrders;
