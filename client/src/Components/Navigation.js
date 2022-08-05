import React from "react";
import "./Navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authAction";
import { FaShoppingCart } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { Badge } from "react-bootstrap";

function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const client = useSelector((state) => state.authReducer.client);
  const token = localStorage.getItem("token");
  return (
    <div>
      <Navbar className="Navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">astroshop</Navbar.Brand>

          <Nav>
            {token ? (
              <div>
                <>
                  <Nav.Link as={Link} to="/home">
                    home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    LOGOUT
                  </Nav.Link>
                </>
                <Nav.Link className="link" as={Link} to="/product">
                  products
                </Nav.Link>
              </div>
            ) : (
              <div>
                <>
                  <Nav.Link className="link" as={Link} to="/home">
                    home
                  </Nav.Link>
                  <Nav.Link className="link" as={Link} to="/signup">
                    Register
                  </Nav.Link>
                  <Nav.Link className="link" as={Link} to="/signin">
                    Login
                  </Nav.Link>
                  <Nav.Link className="link" as={Link} to="/product">
                    products
                  </Nav.Link>
                </>
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
