import { RootState } from '../rootReducer';
import { Emotion, HAPPY, SAD } from './types';
import { HAPPY_DUCK, NEUTRAL_DUCK, SAD_DUCK } from './states';

export const selectDuckText = (state: RootState): string => {
    const { emotion } = state.app;
    switch (emotion) {
        case HAPPY: {
            return HAPPY_DUCK;
        }
        case SAD: {
            return SAD_DUCK;
        }
        default: {
            return NEUTRAL_DUCK;
        }
    }
};

export const getCurrentEmotion = (state: RootState): Emotion => state.app.emotion;

export const selectShowAudioPlayer = (state: RootState): boolean => {
    const AUDIO_PLAYER_EMOTIONS: Emotion[] = [HAPPY, SAD];
    const emotion = getCurrentEmotion(state);
    return AUDIO_PLAYER_EMOTIONS.includes(emotion);
};
