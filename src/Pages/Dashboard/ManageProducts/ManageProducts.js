import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import ManageProduct from "../ManageProduct/ManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="text-center py-5">
          <h2 className="mt-5 fw-bold">Our All Product List</h2>
          <p>Explore World,Lowest Rates, Guaranteed Services.</p>
          <hr />
          <div className="row">
            {products.map((product) => (
              <ManageProduct key={product.id} pd={product}></ManageProduct>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageProducts;
