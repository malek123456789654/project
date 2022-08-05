import React from "react";
import "./ProductList.css";

import { Card, Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../redux/actions/ProductAction";
import { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

function ProductList({ product }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setname] = useState(product.name);
  const [countInStock, setstock] = useState(product.countInStock);
  const [prix, setprix] = useState(product.prix);
  const [description, setdescription] = useState(product.description);
  const [productId, setproductId] = useState(product.productId);
  const [rating, setrating] = useState(product.rating);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("product", product._id);
  const user = useSelector((state) => state.authReducer.client);
  const handleCart = (e) => {
    e.preventDefault();
  };
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct(product._id, {
        name,
        description,
        prix,
        productId,
        countInStock,
        rating,
      }),
      handleClose()
    );
  };
  return (
    <div className="product">
      {user && user.role == "admin" && (
        <div>
          <Card>
            <Card.Title>{product.name}</Card.Title>
            <Card.Img src="https://i.pinimg.com/736x/98/54/6d/98546da42f9354b47225923ddfa20548.jpg" />

            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary" onClick={handleCart}>
              Add to cart
            </Button>

            <p className="info-price">{product.prix}</p>
          </Card>
          <Button
            variant="danger"
            onClick={() => dispatch(deleteProduct(product._id))}
          >
            DELETE
          </Button>
          <Button variant="warning" onClick={handleShow}>
            EDIT
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>product name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="description"
                    onChange={(e) => setdescription(e.target.value)}
                    value={description}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>prix</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="prix"
                    onChange={(e) => setprix(e.target.value)}
                    value={prix}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>productId</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="productId"
                    onChange={(e) => setproductId(e.target.value)}
                    value={productId}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>countInStock</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="countInStock"
                    onChange={(e) => setstock(e.target.value)}
                    value={countInStock}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>rating</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="rating"
                    onChange={(e) => setrating(e.target.value)}
                    value={rating}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="warning" onClick={handleEdit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      {user && user.role == "Client" && (
        <div>
          <Card>
            <Card.Title>{product.name}</Card.Title>
            <Card.Img src="https://i.pinimg.com/736x/98/54/6d/98546da42f9354b47225923ddfa20548.jpg" />

            <Card.Text>{product.description}</Card.Text>
            <Button style={{ color: "green"  }} onClick={handleCart}>
              Add to cart
            </Button>

            <p className="info-price">{product.prix}</p>
          </Card>
        </div>
      )}{" "}
      {!user && (
        <div>
          <Card>
            <Card.Title>{product.name}</Card.Title>
            <Card.Img src="https://i.pinimg.com/736x/98/54/6d/98546da42f9354b47225923ddfa20548.jpg" />

            <Card.Text>{product.description}</Card.Text>
            <Button style={{ color: "green" }} onClick={handleCart}>
              Add to cart
            </Button>

            <p className="info-price">{product.prix}</p>
          </Card>
        </div>
      )}
    </div>
  );
}

export default ProductList;
