import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

export const PageNavbar = () => {
  const [bg, setBg] = useState("dark");

  if (typeof window !== "undefined") {
    setBg(localStorage.getItem("bg") || "light");
  }

  useEffect(() => {
    localStorage.setItem("bg", bg);
  }, [bg]);

  const onButton = () => {
    console.log(bg);
    setBg(bg == "light" ? "dark" : "light")
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg={bg} variant={bg}>
      <Container>
        <Navbar.Brand href="/">Nextify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/static/contact">Contact</Nav.Link>
            <Nav.Link href="/static/aboutus">about us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/checkout">🛒</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
