import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src="images/clinic.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Clinic logo"
        />
        Clinic
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown
            title="Departments"
            id="collasible-deparments-nav-dropdown"
          >
            <NavDropdown.Item href="haematology">Haematology</NavDropdown.Item>
            <NavDropdown.Item href="biochemistry">
              Biochemistry
            </NavDropdown.Item>
            <NavDropdown.Item href="microbiology">
              Microbiology
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Reports" id="collasible-reports-nav-dropdown">
            <NavDropdown.Item href="createreport">
              Create report
            </NavDropdown.Item>
            <NavDropdown.Item href="getreport">Get report</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
