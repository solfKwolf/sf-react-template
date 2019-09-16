import { app } from 'actions/ActionTypes.js';

const initialState = "Hello react starter kit";

function appReducers(state = initialState, action) {
  switch (action.type) {
      case app.test:
          return action.data;
      default:
          return state;
  }
}

export default appReducers;