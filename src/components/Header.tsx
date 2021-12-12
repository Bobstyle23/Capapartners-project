import React from "react";
import { Navbar, Nav, Container, Offcanvas, Image } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CAPA 파트너스</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                style={{ color: "#1565C0" }}
              >
                CAPA 파트너스
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
                  color: "#fffff",
                  borderRight: "1px solid #FFFFFF",
                  marginRight: "1rem",
                  paddingRight: "1rem",
                }}
              >
                A 가공 업체
              </Nav.Link>
              <Nav.Link style={{ color: "#fffff" }}>로그아웃</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
