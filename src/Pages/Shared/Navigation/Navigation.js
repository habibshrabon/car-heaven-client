import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="bg-info" collapseOnSelect sticky="top" expand="lg ">
      <Container>
        <Navbar.Brand as={Link} className="fw-bold fs-2 text-black" to="/">
          CAR HEAVEN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-black" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-black" as={Link} to="/myOrders">
              My Orders
            </Nav.Link>
            <Nav.Link className="text-black" as={Link} to="/addProduct">
              Add Product
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/manageOrder">
              Manage All Order
            </Nav.Link>

            {/* {user?.email ? (
              <Nav.Link className="text-white" onClick={logOut}>
                <FontAwesomeIcon icon={faSignOutAlt} className="text-danger" />
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link className=" px-3 text-white">
              {user?.displayName}
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
