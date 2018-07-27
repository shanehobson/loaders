import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import colorsReducer from '../reducers/colors';
import paginationReducer from '../reducers/pagination';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        colors: colorsReducer,
        pagination: paginationReducer
      }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
