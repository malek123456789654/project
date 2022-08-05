import React, { useState } from "react";
import { Button, Card, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteclient, updateClient } from "../redux/actions/authAction";
const ClientSetting = () => {
  const Client = useSelector((state) => state.authreducer);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Card border="primary" style={{ width: "18rem", margin: " 5rem auto " }}>
        <Card.Header>settings</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                onChange={(e) => setname(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
            </Form.Group>

            <ListGroup.Item
              border="none"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                onClick={() => {
                  dispatch(
                    updateClient(Client._id, {
                      name,
                      email,
                      password,
                    }),
                    navigate("/profile")
                  );
                }}
              >
                EDIT
              </Button>
              <Button
                variant="danger"
                onClick={() =>
                  dispatch(deleteclient(Client._id), navigate("/"))
                }
              >
                DELETE
              </Button>
            </ListGroup.Item>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ClientSetting;
