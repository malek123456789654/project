import axios from "axios";
import { alert_errors } from "./alertAction";

import { FAIL, GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../types/authType";

export const register = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/client/register", data);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/signin");
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_errors(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/client/log", data);

    dispatch({ type: LOGIN, payload: res.data });
    navigate("/Profile");
    dispatch(alert_errors(res.data.msg, "success"));
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/client/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const logout = () => {
  return { type: LOGOUT };
};
export const deleteclient = (id) => async (dispatch) => {
  try {
    await axios.delete(`/client/deletClient/${id}`);
    dispatch(get_current(id));
  } catch (error) {
    console.log(error);
  }
};
export const updateClient = (id, updatclient) => async (dispatch) => {
  try {
    await axios.put(`/client/updateClient/${id}`, updatclient);
    dispatch(get_current(id));
  } catch (error) {
    console.log(error);
  }
};
