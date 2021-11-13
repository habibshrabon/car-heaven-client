import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faSignOutAlt,
  faPlus,
  faUserPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
import { Nav } from "react-bootstrap";

const Dashboard = () => {
  const { logOut, user } = useAuth();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://quiet-mountain-69399.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user]);
  return (
    <div
      className="dashboard d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled li-style">
        <Link to="/">
          <span className="text-danger fw-bold">CAR HEAVEN</span>
        </Link>
        {admin && (
          <>
            <li>
              <Link to="/addProduct" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add A Product</span>
              </Link>
            </li>

            <li>
              <Link to="/makeAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manageAllProducts" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                <span>Manage All Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/manageProducts" className="text-white">
                <FontAwesomeIcon icon={faList} /> <span>Manage Products</span>
              </Link>
            </li>
          </>
        )}

        {!admin && (
          <>
            <li>
              <Link to="/myOrders" className="text-white">
                <FontAwesomeIcon icon={faList} /> <span>My Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/pay" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Pay</span>
              </Link>
            </li>

            <li>
              <Link to="/review" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Review</span>
              </Link>
            </li>
          </>
        )}
      </ul>
      <div>
        <Nav.Link className="text-white" onClick={logOut}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Logout
        </Nav.Link>
      </div>
    </div>
  );
};

export default Dashboard;
