import { AppState, HAPPY, NEUTRAL, SAD } from './types';
import { ActionType, getType } from 'typesafe-actions';
import * as appActions from './actions';
import { duckHappy, duckSad } from './actions';

export const defaultAppState: AppState = {
    emotion: NEUTRAL,
};

type AppActions = ActionType<typeof appActions>;

export default (state: AppState = defaultAppState, action: AppActions): AppState => {
    switch (action.type) {
        case getType(duckHappy): {
            return {
                ...state,
                emotion: HAPPY,
            };
        }
        case getType(duckSad): {
            return {
                ...state,
                emotion: SAD,
            };
        }
        default: {
            return state;
        }
    }
};
