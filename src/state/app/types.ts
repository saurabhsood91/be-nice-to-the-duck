export const NEUTRAL = 'neutral';
export const HAPPY = 'happy';
export const SAD = 'sad';

export type Emotion = typeof NEUTRAL | typeof HAPPY | typeof SAD;

export interface AppState {
    emotion: Emotion;
}
