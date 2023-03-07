import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
          <Nav.Link href="/components/static/contact">Contact</Nav.Link>
          <Nav.Link href="/components/static/aboutus">about us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/checkout">🛒</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default PageNavbar;
