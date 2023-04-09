import { ActionTypes } from "../constants/action-types";
const intialState = {
  authDetails: [],
};



export const authReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_DETAILS:
      return { ...state, authDetails: payload };
    default:
      return state;
  }
};
