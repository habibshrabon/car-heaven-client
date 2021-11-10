import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Footer from "../../Shared/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
