import * as React from 'react';
import './index.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { textEntered } from '../../state/app/actions';

const InputBox: React.FunctionComponent = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = inputRef.current?.value;
        if (!value) {
            return;
        }
        if (e.keyCode === 13) {
            dispatch(textEntered({ value }));
        }
    };

    return <input type="text" className="Input-box" ref={inputRef} onKeyUp={handleKeyPress} />;
};

export default InputBox;
