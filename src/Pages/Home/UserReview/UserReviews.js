import React from "react";
import "./UserReviews.css";

const UserReviews = ({ review }) => {
  const { name, productName, description, img } = review;
  return (
    <div style={{}} className="col-md-6 col-lg-4">
      <div
        style={{ border: "1px solid gray", background: "#F7F7F6" }}
        className="p-4 rounded mb-5"
      >
        <div className="row review-img">
          <img src={img} alt="" />
          <div>
            <h3>{name}</h3>
            <p>{productName}</p>
          </div>
        </div>
        <p>{description} </p>
      </div>
    </div>
  );
};

export default UserReviews;
