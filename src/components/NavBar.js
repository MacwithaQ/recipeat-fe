import react from "react";
import { NavLink } from "react-bootstrap";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Image,
} from "react-bootstrap";
import frenchFries from "../media/FrenchFries.png";
import burgerIcon from "../media/BurgerIcon.png";

function NavBar() {
  return (
    <Navbar>
      <Container fluid>
        <a class="navbar-brand" href="#">
          <img src={burgerIcon} width="50" alt="" className="mb-2" />
        </a>
        <Navbar.Brand href="#" className="d-fl">
          <div className="d-flex">
            <h1>RecipEat</h1>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link className="link-dark" href="#action2">
              Categories
            </Nav.Link>
            <NavDropdown title="Recipes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button type="button" class="btn btn-dark">
              Search
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
