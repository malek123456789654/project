import React from "react";
import { useSelector } from "react-redux";

import ProductList from "./ProductList";

function MainProduct() {
  const producto = useSelector(
    (state) => state.ProductReducer.products.allproducts
  );

  return (
    <div style={{ display: "flex", justifyContent: "start" }}>
      {producto?.map((product) => (
        <ProductList product={product} key={product._id} />
      ))}
    </div>
  );
}

export default MainProduct;
