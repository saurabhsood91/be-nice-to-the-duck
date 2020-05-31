import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './state/store';

function App() {
    return (
        <Provider store={configureStore()}>
            <div className="App"></div>
        </Provider>
    );
}

export default App;
