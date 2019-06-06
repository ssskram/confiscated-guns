import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import AccountContainer from "./accountContainer";

const NavMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Link to="/">
        <Navbar.Brand>Confiscated Guns</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <AccountContainer />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
