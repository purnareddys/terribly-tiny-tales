import React from "react";
import { Navbar } from "react-bootstrap";

// A Simple Header Component
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h2>Terribly Tiny Tales</h2>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};
export default Header;
