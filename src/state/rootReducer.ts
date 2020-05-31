import { combineReducers } from 'redux';
import appReducer from './app/reducer';
import { AppState } from './app/types';

export interface RootState {
    app: AppState;
}

export default combineReducers<RootState>({
    app: appReducer,
});
