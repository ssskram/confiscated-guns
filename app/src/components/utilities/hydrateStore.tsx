// hydrates the wholeeeeee store
import { useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import * as user from "../../store/user";
import * as guns from "../../store/guns";

type props = {
  loadUser: () => void;
  loadGuns: () => void;
};

const Hydrate = (props: props) => {
  useEffect(() => {
    props.loadUser();
    props.loadGuns();
  }, []);

  return null;
};

export default connect(
  (state: ApplicationState) => ({
    ...state.user,
    ...state.guns
  }),
  {
    ...user.actionCreators,
    ...guns.actionCreators
  }
)(Hydrate);
