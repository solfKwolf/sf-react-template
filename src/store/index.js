import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '@/reducers';

export function configureStore() {
  const enhancer = composeWithDevTools(
    applyMiddleware(
      thunk,
    ),
  );

  return createStore(
    combineReducers({
      ...reducers,
    }),
    enhancer);
}

export const store = configureStore();
