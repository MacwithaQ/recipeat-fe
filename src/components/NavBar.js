import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import burgerIcon from "../media/BurgerIcon.png";

function NavBar({ setQuery }) {
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };
  return (
    <Navbar>
      <Container fluid>
        <a class="navbar-brand" href="/">
          <img src={burgerIcon} width="50" alt="" className="mb-2" />
        </a>
        <Navbar.Brand className="d-fl" to="/">
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
            <NavLink className="text-decoration-none text-reset m-2" to="/">
              Home
            </NavLink>
            <NavLink
              className="link-dark text-decoration-none text-reset m-2"
              to="/categories"
            >
              Categories
            </NavLink>
            <NavLink
              className="link-dark text-decoration-none text-reset m-2"
              to="/recipes"
            >
              Recipes
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              defaultValue={""}
              className="me-2"
              aria-label="Search"
              onChange={handleQuery}
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
