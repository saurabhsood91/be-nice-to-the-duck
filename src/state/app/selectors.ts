import { RootState } from '../rootReducer';
import { HAPPY, SAD } from './types';
import { HAPPY_DUCK, NEUTRAL_DUCK } from './states';

export const selectDuckText = (state: RootState): string => {
    const { emotion } = state.app;
    switch (emotion) {
        case HAPPY: {
            return HAPPY_DUCK;
        }
        case SAD: {
            return 'SAD';
        }
        default: {
            return NEUTRAL_DUCK;
        }
    }
};