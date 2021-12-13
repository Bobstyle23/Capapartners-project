import React from "react";
import { Navbar, Nav, Container, Offcanvas, Image } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#1565C0" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <span style={{ fontWeight: "900" }}>CAPA</span> 파트너스
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                style={{
                  color: "#1565C0",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                CAPA 파트너스
                <hr />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link style={{ color: "#323D45" }} href="#action1">
                  파트너정밀가공
                </Nav.Link>
                <Nav.Link style={{ color: "#323D45" }} href="#action2">
                  로그아웃
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Collapse>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link
                style={{
                  color: "#ffffff",
                  height: "35px",
                  borderRight: "1px solid #ffffff",
                  marginRight: "1rem",
                  paddingRight: "1rem",
                  fontWeight: "500",
                }}
              >
                A 가공 업체
              </Nav.Link>
              <Nav.Link style={{ color: "#ffffff" }}>로그아웃</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
