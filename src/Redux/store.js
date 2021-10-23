import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducer';

const middlewares = [
    thunk
];

const store = createStore(reducers, 
    applyMiddleware(...middlewares)
);

export default store;