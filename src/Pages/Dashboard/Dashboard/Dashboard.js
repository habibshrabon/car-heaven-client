import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../../images/logo.png";
import "./Dashboard.css";

// import { UserContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faSignOutAlt,
  faPlus,
  faUserPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled li-style">
        <>
          <Link className="laundry" to="/">
            {/* <img src={logo} alt="" /> */}
            <span className="text-danger fw-bold">CAR HEAVEN</span>
          </Link>
          <li>
            <Link to="/myOrders" className="text-white">
              <FontAwesomeIcon icon={faList} /> <span>My Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/addService" className="text-white">
              <FontAwesomeIcon icon={faPlus} /> <span>Add A Product</span>
            </Link>
          </li>
          <li>
            <Link to="/makeAdmin" className="text-white">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
            </Link>
          </li>
          <li>
            <Link to="/manageService" className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} />{" "}
              <span>Manage Services</span>
            </Link>
          </li>
        </>

        <>
          <li>
            <Link to="/booking/:_id" className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span>
            </Link>
          </li>
          <li>
            <Link to="/bookingList" className="text-white">
              <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
            </Link>
          </li>
          <li>
            <Link to="/review" className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} /> <span>Review</span>
            </Link>
          </li>
        </>
      </ul>
      <div>
        <Link to="/login" className="text-white">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            onClick={() => console.log({})}
          />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
