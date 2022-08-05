import {
  REGISTER,
  FAIL,
  LOGIN,
  GET_CURRENT,
  LOGOUT,
  GETCLIENTS,
} from "../types/authType";
const initialState = { client: {}, error: [] };

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.token);

      return { ...state, client: payload.client };

    case LOGIN:
      localStorage.setItem("client", JSON.stringify(payload.clientLogin));
      localStorage.setItem("token", payload.token);
      return { ...state, client: payload.clientLogin };

    case GET_CURRENT:
      return { ...state, client: payload.client };

    case GETCLIENTS:
      return { ...state, clients: payload.clients };
    case FAIL:
      return { ...state, error: payload.error, client: null };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("client");

      return { ...state, client: null };
    default:
      return state;
  }
};
