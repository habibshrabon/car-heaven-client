import React from "react";

const Product = ({ product }) => {
  const { img, name, manufactured, price, description } = product;
  return (
    <>
      <div className="col-md-4 mb-3 ">
        <div className="card h-100 card-bg shadow img-style">
          <img
            src={img}
            style={{ height: "275px" }}
            className="card-img-top justify-content-center align-items-center img-fluid"
            alt="img"
          />
          <div className="card-body px-2">
            <h3 className="card-title text-center">{name}</h3>
            <p class="card-text">Manufactured Year: {manufactured}</p>
            <p class="card-text">{description}</p>
            <div className="d-flex justify-content-between">
              <h4>Price: $ {price}</h4>
              <button className="btn btn-primary px-3">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
