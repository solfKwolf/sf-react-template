// import ActionTypes from 'actions/ActionTypes.js';
import Lockr from "lockr"
const initialState = {
  language: Lockr.get("language") || "zh",
};

function appReducers(state = initialState, action) {
  switch (action.type) {
      default:
          return state;
  }
}

export default appReducers;