import { createAction } from 'typesafe-actions';

const TEXT_ENTERED = 'app/TEXT_ENTERED';
const DUCK_HAPPY = 'app/DUCK_HAPPY';
const DUCK_SAD = 'app/DUCK_SAD';

interface TextEnteredPayload {
    value: string;
}

export const textEntered = createAction(TEXT_ENTERED)<TextEnteredPayload>();
export const duckHappy = createAction(DUCK_HAPPY)();
export const duckSad = createAction(DUCK_SAD)();
