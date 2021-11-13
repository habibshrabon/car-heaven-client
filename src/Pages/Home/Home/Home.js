import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Footer from "../../Shared/Footer/Footer";
import UserReview from "../UserReview/UserReview";
import AboutUs from "../AboutUs/AboutUs";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Products />
      <UserReview />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
