import { compose, createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const middlewareEnhancer = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewareEnhancer);

export default function configureStore() {
    return createStore(rootReducer, enhancers);
}
