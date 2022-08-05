import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/authAction";
//  import { authReducer } from "../redux/reducers/authReducers";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleregister = (e) => {
    e.preventDefault();
    dispatch(register({ email, password }, navigate));
  };

  return (
    <Container>
      <h1 className="shadow-sm text-success mt-5 p-3 text-center-rounded">
        Client Register
      </h1>
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-leg">
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="success btn-block"
                type="submit"
                onClick={handleregister}
              >
                Register
              </Button>
              <p>already have an account ?</p>
              <Link to="/signin">
                <span style={{ color: "green" }}>Login here</span>
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
      <h6 className="mt-5 p-5 text-center text-secondary">
        copyright &copy; 2022 AstroMALEK AB. All rights reserved
      </h6>
    </Container>
  );
}

export default Register;
