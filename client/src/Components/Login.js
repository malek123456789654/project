import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/authAction";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }, navigate));
  };
  return (
    <div>
      {" "}
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center-rounded">
          Client Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-leg"
          >
            <div className="log">
              <Form className="login">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="label">Email address</Form.Label>
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
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="success btn-block" onClick={handleLogin}>
                  Login
                </Button>
                <p>you don't have an account ?</p>
                <Link to="/signup">
                  <span style={{ color: "green" }}>register here</span>
                </Link>
              </Form>
            </div>
          </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary">
          copyright &copy; 2022 AstroMALEK AB. All rights reserved
        </h6>
      </Container>
    </div>
  );
};

export default Login;
