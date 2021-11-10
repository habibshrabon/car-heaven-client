import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area py-5 ">
      <Container>
        <footer className="row">
          <div className="col-md-6 col-lg-3">
            <h3>About Us</h3>
            <p>
              Car Heaven is a family-owned-and-operated business that started in
              1952. With 65 years of automotive recycling experience, we're
              proud to say that we're an environmentally responsible recycler.
              You'll be selling directly to an automotive recycling company, not
              a third party.
            </p>
            <button className="btn-primary">Booking</button>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Pages</h3>
            <a href="/">Home</a>
            <br />
            <a href="/">About Us</a>
            <br />
            <a href="/">Services</a>
            <br />
            <a href="/">Booking</a>
            <br />
            <a href="/">Blog</a>
            <br />
            <a href="/">Contacts</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Maintance</h3>
            <a href="#">Premio</a>
            <br />
            <a href="#">Allion</a>
            <br />
            <a href="#">BMW</a>
            <br />
            <a href="#">Applications</a>
            <br />
            <a href="#">Helps</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Contacts</h3>
            <h5>Cell: +088 017 7892 90</h5>
            <p>E-mail: admin@admin.com</p>
            <br />
            <p>Address: 152 Panthapath St. Dhaka-1208</p>
          </div>
        </footer>
        <div className="text-center">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
