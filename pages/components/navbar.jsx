import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const PageNavbar = () => {
  const [bg, setBg] = useState("light");

  if (typeof window !== "undefined") {
    setBg(localStorage.getItem("bg") || "light");
  }

  useEffect(() => {
    localStorage.setItem("bg", bg);
  }, [bg]);

  return (
    <Navbar collapseOnSelect expand="lg" bg={bg} variant={bg} sticky="top">
      <Container>
        <Navbar.Brand href="/">Nextify</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/static/contact">Contact</Nav.Link>
          <Nav.Link href="/static/aboutus">about us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/checkout">🛒</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default PageNavbar;
