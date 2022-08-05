import React from "react";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

const AlertErrors = () => {
  const errors = useSelector((state) => state.alertReducers.errors);

  return (
    <div>
      {" "}
      {errors.map((el) => (
        <Alert variant="danger">
          <Alert.Heading>{el.msg}</Alert.Heading>
        </Alert>
      ))}
    </div>
  );
};

export default AlertErrors;
