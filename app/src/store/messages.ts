import { Action, Reducer } from "redux";
import { AppThunkAction } from ".";
import * as constants from "./constants";
import * as types from "./types";

const unloadedState: types.messsage = {
  message: ""
};

export const actionCreators = {
  error: (): AppThunkAction<any> => dispatch => {
    dispatch({ type: constants.error });
  },
  clearMessage: (): AppThunkAction<any> => dispatch => {
    dispatch({ type: constants.clear });
  }
};

export const reducer: Reducer<types.messsage> = (
  state: types.messsage,
  incomingAction: Action
) => {
  const action = incomingAction as any;
  switch (action.type) {
    case constants.error:
      return {
        ...state,
        message:
          "Ooops!<br/>That didn't work<br/>Please logout, log back in, and try again"
      };
    case constants.clear:
      return { ...state, message: "" };
  }
  return state || unloadedState;
};
