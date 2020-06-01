import * as React from 'react';
import './index.css';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { textEntered } from '../../state/app/actions';

const InputBox: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const inputElement = useRef(null);

    const onChange = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const enteredText = inputElement.current?.value;
        if (enteredText === '') {
            setText('');
            return;
        }
        console.log({ enteredText });
        setText(enteredText);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            dispatch(textEntered({ value: text }));
        }
    };

    return (
        <input
            type="text"
            className="Input-box"
            ref={inputElement}
            onChange={onChange}
            value={text}
            onKeyDown={onKeyDown}
        />
    );
};

export default InputBox;
