// import ActionTypes from 'actions/ActionTypes.js';
import Lockr from "lockr"
const initialState = {
  language: Lockr.get("language") || "zh",
};

function appReducers(state = initialState, action) {
  switch (action.type) {
      case "CHANGE_LANG": 
        Lockr.set("language", action.language)
        return {
          ...state,
          language: action.language
        }
      default:
          return state;
  }
}

export default appReducers;