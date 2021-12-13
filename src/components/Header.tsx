import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import "./styles/header-styles.css";
const Header = () => {
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span className="logo">CAPA</span> 파트너스
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
                className="offCanvas-title"
              >
                CAPA 파트너스
                <hr />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="link-color" href="#action1">
                  파트너정밀가공
                </Nav.Link>
                <Nav.Link className="link-color" href="#action2">
                  로그아웃
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Collapse>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link id="header-link">A 가공 업체</Nav.Link>
              <Nav.Link id="header-link2">로그아웃</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
