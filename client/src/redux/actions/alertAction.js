import { ALERT_ERRORS, ClEAR_ERRORS } from "../types/alertTypes";

export const alert_errors = (msg) => async (dispatch) => {
  const id = Math.random();
  dispatch({ type: ALERT_ERRORS, payload: { msg, id } });
  setTimeout(() => {
    dispatch({ type: ClEAR_ERRORS, payload: id });
  }, 3000);
};
