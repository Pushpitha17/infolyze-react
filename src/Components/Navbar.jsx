import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BoostrapNavBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <BoostrapNavBar bg="light" variant="light" style={{ height : '80px'}}>
      <Container>
        <BoostrapNavBar.Brand href="/">
          <img src="/assets/img/logo.png" width="30" height="30" />
        </BoostrapNavBar.Brand>
        <Nav className="me-auto" activeKey={location.pathname}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/demo">Detect</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </BoostrapNavBar>
  );
}

export default Navbar;
