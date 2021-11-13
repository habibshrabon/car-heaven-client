import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import ManageProduct from "../ManageProduct/ManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://quiet-mountain-69399.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <Dashboard />
      <div className="container">
        <div className="text-center py-5">
          <h2 className="my-5 fw-bold">Manage Products</h2>
          <div className="row">
            {products.map((product) => (
              <ManageProduct key={product.id} pd={product}></ManageProduct>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
