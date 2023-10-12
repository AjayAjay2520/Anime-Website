import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaCrown } from "react-icons/Fa";
import { BiSearchAlt } from "react-icons/Bi";
import { PiBookmarkSimpleBold } from "react-icons/Pi";
import { FaRegUser } from "react-icons/Fa";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <div className="Main">
      <Navbar className="bg-dark " expand="lg">
        <Navbar.Brand href="#" className="text-warning ">
          <div className="loded d-flex justify-content-center ">
            <div className="pyramid-loader">
              <div className="wrapper">
                <span className="side side1"></span>
                <span className="side side2"></span>
                <span className="side side3"></span>
                <span className="side side4"></span>
                <span className="shadow"></span>
              </div>
            </div>
            <div className="fs-2 ">AniCart</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto fs-5">
            <Nav.Link href="#" className="premium me-5 ">
              <span className="text-warning">
                Premium <FaCrown />
              </span>
            </Nav.Link>
            <Nav.Link className="text-light Nav_text" to="/" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="text-light Nav_text" to="/game" href="#">
              Games
            </Nav.Link>
            <Nav.Link className="text-light Nav_text" to="/manga" href="#">
              Manga
            </Nav.Link>
            <NavDropdown
              className="me-5"
              title="Browse"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#">New</NavDropdown.Item>
              <NavDropdown.Item href="#">Old</NavDropdown.Item>
              <NavDropdown.Item href="#">Adventure</NavDropdown.Item>
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Comedy</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="text-light fs-4">
              <BiSearchAlt />
            </Nav.Link>
            <Nav.Link href="#" className="text-light fs-4">
              <PiBookmarkSimpleBold />
            </Nav.Link>
            <Nav.Link href="#" className="text-light fs-4">
              <FaRegUser />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar1;
