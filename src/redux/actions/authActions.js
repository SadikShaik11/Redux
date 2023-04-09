import { ActionTypes } from "../constants/action-types";

export const setLoginDetails = (loginDetails, history) => {
  return {
    type: ActionTypes.LOGIN_DETAILS,
    payload: loginDetails,
  };
};
