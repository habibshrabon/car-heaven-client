import React from "react";
import image from "../../../images/about-pic.jpg";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const AboutUs = () => {
  return (
    <div>
      <Navigation />
      <section style={{ height: "100%" }} className="container mt-5">
        <h2 className="text-center pt-3 fw-bold">ABOUT US</h2>
        <div className="row align-items-center py-5">
          <div className="col-md-6 pe-5">
            <img className="img-fluid p-5" src={image} alt="" />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold pb-4">
              WELCOME TO THE <span className="text-style">MOTORS</span>
            </h2>
            <h4 className="pb-4">
              Before we get ahead of ourselves, we want to welcome you to Loeber
              Motors. While nothing can replace thing on-the-lot experience.
            </h4>
            <p>
              We appreciate you taking the time today to visit our web site. Our
              goal is to give you an interactive tour of our new and used
              inventory, as well as allow you to conveniently get a quote,
              schedule a service appointment, or apply for financing. The search
              for a luxury car is filled with high expectations. Undoubtedly,
              that has a lot to do with the vehicles you are considering, but at
              Motors, we think you should also have pretty high expectations for
              your dealership.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
