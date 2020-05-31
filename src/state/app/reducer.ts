import { AppState } from '../types/app';

export const defaultAppState: AppState = {
    initialized: false,
};

export default (state: AppState, action: any): AppState => {
    return defaultAppState;
};
