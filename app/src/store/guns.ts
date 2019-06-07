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
  newGun: (gun: types.gun): AppThunkAction<any> => async dispatch => {
    let spGun: types.gun = Object.assign({}, gun);
    delete spGun.created;
    delete spGun.redirect;
    delete spGun.spID;
    const response = await fetch(
      "https://365proxy.azurewebsites.us/confiscatedGuns/newRecord",
      {
        method: "post",
        body: JSON.stringify(spGun),
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
  },
  updateRecord: (updateObj: {
    spID: number;
    postedNCIC: "Yes" | "No";
  }): AppThunkAction<any> => dispatch => {
    const spLoad = JSON.stringify({
      Id: updateObj.spID,
      postedNCIC: updateObj.postedNCIC
    });
    fetch("https://365proxy.azurewebsites.us/confiscatedGuns/updateRecord", {
      method: "post",
      body: spLoad,
      headers: new Headers({
        Authorization: "Bearer " + process.env.REACT_APP_365_PROXY,
        "Content-Type": "application/json"
      })
    });
    dispatch({ type: constants.updateRecord, update: updateObj });
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
    case constants.updateRecord:
      return {
        ...state,
        guns: state.guns.map(record =>
          record.spID === action.update.spID
            ? {
                ...record,
                postedNCIC: action.update.postedNCIC
              }
            : record
        )
      };
  }
  return state || unloadedState;
};
