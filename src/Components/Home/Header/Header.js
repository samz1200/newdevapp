import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import "./Header.css";
const Header = () => {
  const style1 = {
    paddingTop: "30px",
    color: "white",
   paddingTop: "30px",
   marginRight: "30px",

  };
  const style2 = {
  color: "white",
  marginRight: "30px",
  }
  const style3 = {
    color: "white",

  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navber navbar-light"
    >
      <Container>
        <Navbar.Brand href="/home" className="logo">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav">
            <Nav.Link href="/portfolio" style={style1} className="nav2">
              Portfolio
            </Nav.Link>
            <Nav.Link href="/price" style={style1}>
              Pricing
            </Nav.Link>
            <Nav.Link
              href="https://connectinghelpinghandsfoundation.org/"
              id="testimonials"
              style={style2}
            >
              Upcoming <br /> Events
            </Nav.Link>
            <Nav.Link
              href="https://www.VonElijahFitness.com/"
              style={style2}
            >
              Von Elijah <br /> Fitness
            </Nav.Link>
            <Nav.Link
              href="https://www.PayAllAthletes.com/"
              style={style2}
            >
              Pay All <br /> Athletes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
