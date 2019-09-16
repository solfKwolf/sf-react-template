import { app } from "./ActionTypes"

export function changeMessage (message) {
  return {
      type: app.test,
      data: message
  };
}