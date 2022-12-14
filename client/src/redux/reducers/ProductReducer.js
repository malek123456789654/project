import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_FAIL_DETAILS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_REQUEST_DETAILS,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_SUCCESS_DETAILS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
} from "../types/ProductType";

const initialState = {
  products: [],
  product: {},
  loading: false,
  error: "",
  success: "",
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: action.payload };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_LIST_REQUEST_DETAILS:
      return { loading: true };

    case PRODUCT_LIST_SUCCESS_DETAILS:
      return { loading: false, product: action.payload };

    case PRODUCT_LIST_FAIL_DETAILS:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.successMessage,
      };
    case PRODUCT_CREATE_FAIL:
      return { product: {} };

    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, product: action.payload, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};
export default ProductReducer;
