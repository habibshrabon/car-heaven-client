import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="text-center py-5">
        <h2 className="mt-5 fw-bold">Our services</h2>
        <p>Explore World,Lowest Rates, Guaranteed Services.</p>
        <hr />
        <div className="row">
          {products.slice(0, 6).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
