import React from "react";

const UserReviews = ({ review }) => {
  const { name, productName, description, img } = review;
  return (
    <div className="col-md-6 col-lg-4">
      <div style={{ border: "1px solid gray" }} className="p-4 rounded mb-5">
        <div className="row">
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            src={img}
            alt=""
          />
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
