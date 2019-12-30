import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { defaultReducer, IDefaultReducerState } from '../reducers/defaultReducer';

export interface StoreState {
  defaultStore: IDefaultReducerState;
}

const rootReducer = combineReducers<StoreState>({
  defaultStore : defaultReducer
});

const middleware = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)

export function configureStore() {
  const store = createStore(rootReducer, undefined, middleware);
  return store;
}