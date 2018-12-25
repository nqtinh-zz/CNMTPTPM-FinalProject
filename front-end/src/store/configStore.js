// import { createStore, applyMiddleware,compose } from 'redux';
// import rootReducer from '../reducers/rootReducer'
// import thunk from 'redux-thunk';

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
    
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware),
//          window.__REDUX_DEVTOOLS_EXTENSION__ && 
//          window.__REDUX_DEVTOOLS_EXTENSION__()) 
//          );

// export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;