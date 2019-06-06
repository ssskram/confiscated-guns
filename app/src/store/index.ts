import * as user from "./user";
import * as types from "./types";
import * as guns from "./guns";

export interface ApplicationState {
  user: types.user;
  guns: types.guns;
}

export const reducers = {
  user: user.reducer,
  guns: guns.reducer
};

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
