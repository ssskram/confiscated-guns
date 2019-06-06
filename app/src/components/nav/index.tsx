import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import AccountContainer from "./accountContainer";

type props = {
  location: any;
};

const NavMenu = (props: props) => {
  console.log(props);
  let newGun = <span style={{ color: "rgb(255, 193, 7)" }}> > New Gun</span>;
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Link to="/">
        <Navbar.Brand>
          Confiscated Guns{props.location.pathname == "/NewGun" ? newGun : null}
        </Navbar.Brand>
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

export default withRouter(NavMenu);
