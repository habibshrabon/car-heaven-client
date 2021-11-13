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

      <div className="py-5 col-md-10 make__admin">
        <h1>Admin</h1>
        <form
          onSubmit={handelAdminSubmit}
          className="mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <input
            onBlur={handelOnBlur}
            className="form-control"
            type="email"
            name="email"
            placeholder="Make Admin Email Here"
          />
          <br />
          <button type="submit" className=" btn btn-style px-3">
            Make Admin
          </button>
        </form>
        {success && alert("Make admin successfully")}
      </div>
    </div>
  );
};

export default MakeAdmin;
