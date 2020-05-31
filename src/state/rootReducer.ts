import { combineReducers } from 'redux';
import appReducer from './app/reducer';
import { AppState } from './app/types';

const rootReducer = combineReducers({
    app: appReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
