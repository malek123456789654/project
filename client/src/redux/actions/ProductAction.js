import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_LIST_REQUEST_DETAILS,
} from "../types/ProductType";

const listProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products/product`);
    dispatch({ type: PRODUCT_LIST_REQUEST, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response.data,
    });
  }
};
const listProductsDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products/${id}`);
    dispatch({ type: PRODUCT_LIST_REQUEST_DETAILS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response.data,
    });
  }
};

const updateProduct = (id, product) => async (dispatch) => {
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });

    const { data } = await axios.put(
      `/products/update/${id}`,
      product,
      headers
    );
    console.log(data);
    dispatch(listProducts());
    window.location.reload(true);
    // window.location.href = "/profile";
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: error.response.data,
    });
  }
};

// const deleteProduct = (productId) => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
//     const { data } = await axios.delete(`/products/remove/${productId}`, {
//       headers: {
//         Authorization: localStorage.getItem("token"),
//       },
//     });
//     dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_DELETE_FAIL,
//       payload: error.response.data,
//     });
//   }
// };
const deleteProduct = (productId) => async (dispatch) => {
  try {
    await axios.delete(`/products/remove/${productId}`);
    dispatch(listProducts());
  } catch (error) {
    console.log(error);
  }
};
const createProduct = (product) => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    await axios.post(`/products/addproduct`, product, config);
    dispatch(listProducts());
    window.location.reload(true);
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: error.response.data,
    });
  }
};
// const createProduct = (product, navigate) => async (dispatch) => {
//   // const config = {
//   //   headers: {
//   //     token: localStorage.getItem("token"),
//   //   },
//   // };

//   try {
//     await axios.post("/products/addproduct", product);
//   } catch (error) {
//     console.log(error);
//   }
// };

export {
  listProducts,
  updateProduct,
  deleteProduct,
  createProduct,
  listProductsDetails,
};
