import React from "react";
import { Table } from "react-bootstrap";
import Dashboard from "../Dashboard/Dashboard";

const MyOrders = () => {
  return (
    <section className="container-fluid row">
      <Dashboard />
      <div
        className="pt-4 col-md-10"
        style={{ position: "absolute", right: "0", background: "#F4FDFB" }}
      >
        <h3 className="text-brand p-4">Order List</h3>
        <Table striped bordered hover className="p-3 shadow">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Services</th>
              <th>Pay with</th>
              <th>status</th>
            </tr>
          </thead>

          {/* {orders.length === 0
            ? "No Order found"
            : orders.map((order) => (
                <Order order={order} key={orders._id}></Order>
              ))} */}
        </Table>
      </div>
    </section>
  );
};

export default MyOrders;
