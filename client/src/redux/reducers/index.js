import { combineReducers } from "redux";
import { authReducer } from "./authReducers";
import alertReducers from "./alertReducers";
import ProductReducer from "./ProductReducer";

import "bootstrap/dist/css/bootstrap.min.css";
const rootReducer = combineReducers({
  authReducer,
  alertReducers,
  ProductReducer,
});
export default rootReducer;
