import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={image} alt="404" />
      <Link to="/">
        <button className="btn style px-3 my-5 rounded-3">
          <FontAwesomeIcon icon={faArrowRight} /> Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
