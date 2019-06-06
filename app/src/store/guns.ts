import { Action, Reducer } from "redux";
import { AppThunkAction } from ".";
import * as constants from "./constants";
import * as types from "./types";

const unloadedState: types.guns = {
  guns: []
};

export const actionCreators = {
  loadGuns: (): AppThunkAction<any> => dispatch => {
    fetch("https://365proxy.azurewebsites.us/confiscatedGuns/allRecords", {
      method: "get",
      headers: new Headers({
        Authorization: "Bearer " + process.env.REACT_APP_365_PROXY
      })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: constants.loadGuns, guns: data });
      });
  },
  newGun: (gun): AppThunkAction<any> => async dispatch => {
    const response = await fetch(
      "https://365proxy.azurewebsites.us/confiscatedGuns/newRecord",
      {
        method: "post",
        body: JSON.stringify(gun),
        headers: new Headers({
          Authorization: "Bearer " + process.env.REACT_APP_365_PROXY,
          "Content-Type": "application/json"
        })
      }
    );
    if (response.status == 200) {
      dispatch({ type: constants.newGun, gun: gun });
      return 200;
    } else return 500;
  }
};

export const reducer: Reducer<types.guns> = (
  state: types.guns,
  incomingAction: Action
) => {
  const action = incomingAction as any;
  switch (action.type) {
    case constants.loadGuns:
      return { ...state, guns: action.guns };
    case constants.newGun:
      return {
        ...state,
        guns: state.guns.concat(action.gun)
      };
  }
  return state || unloadedState;
};
