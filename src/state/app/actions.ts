import { createAction } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { RootState } from '../rootReducer';
import { getSentiment } from '../../api/sentiment';

const DUCK_HAPPY = 'app/DUCK_HAPPY';
const DUCK_SAD = 'app/DUCK_SAD';

interface TextEnteredPayload {
    value: string;
}

export const duckHappy = createAction(DUCK_HAPPY)();
export const duckSad = createAction(DUCK_SAD)();

export function textEntered({ value }: TextEnteredPayload): (dispatch: Dispatch, getState: () => RootState) => void {
    return async function (dispatch: Dispatch, getState: () => RootState) {
        const { data } = await getSentiment(value);
        const { sentiment } = data;
        if (sentiment < 5) {
            // Duck is Sad
            dispatch(duckSad());
        } else {
            dispatch(duckHappy());
        }
    };
}
