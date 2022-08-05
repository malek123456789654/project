import { ALERT_ERRORS, ClEAR_ERRORS } from "../types/alertTypes";

const initialState = [];

const alertReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALERT_ERRORS:
      return [...state, payload];
    case ClEAR_ERRORS:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};
export default alertReducers;
