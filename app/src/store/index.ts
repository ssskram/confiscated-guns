import * as user from "./user";
import * as types from "./types";
import * as guns from "./guns";
import * as messages from "./messages";

export interface ApplicationState {
  user: types.user;
  guns: types.guns;
  messages: types.messsage;
}

export const reducers = {
  user: user.reducer,
  guns: guns.reducer,
  messages: messages.reducer
};

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
