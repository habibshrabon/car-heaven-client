import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handelOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handelAdminSubmit = (e) => {
    const user = { email };
    fetch("https://quiet-mountain-69399.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div className="container-fluid row">
      <Dashboard></Dashboard>
      <div
        className="py-5 col-md-10"
        style={{
          position: "absolute",
          height: "100vh",
          right: "0",
          background: "#F4FDFB",
        }}
      >
        <div className="container mx-5">
          <h1>Admin</h1>
          <form onSubmit={handelAdminSubmit}>
            <input
              onBlur={handelOnBlur}
              className="form-control"
              type="email"
              name="email"
              id=""
            />
            <br />
            <button type="submit" className=" btn btn-style px-3">
              Make Admin
            </button>
          </form>
          {success && alert("Make admin successfully")}
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
