import * as React from 'react';
import { Form } from 'react-bootstrap';

const InputBox: React.FunctionComponent = () => (
    <Form.Group controlId="input">
        <Form.Control type="text" placeholder="Please be nice to the duck!" />
    </Form.Group>
);

export default InputBox;
