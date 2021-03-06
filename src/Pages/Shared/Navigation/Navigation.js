import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      className="header-bg"
      style={{ position: "absolute", left: 0, top: 0, right: 0, zIndex: 3 }}
      bg="black"
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          style={{ fontSize: "30px" }}
          className="text-white"
          to="/"
        >
          <span className="web-name">CAR HEAVEN</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className=" text-white " as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className=" text-white" as={Link} to="/aboutUs">
              About Us
            </Nav.Link>
            <Nav.Link className=" text-white" as={Link} to="/allProducts">
              Products
            </Nav.Link>
            {user?.email && (
              <Nav.Link className=" text-white" as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
            {user?.email ? (
              <Nav.Link className="text-white" onClick={logOut}>
                <FontAwesomeIcon className="text-danger" icon={faSignOutAlt} />
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link className=" px-3 text-white">
              {user?.displayName}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
