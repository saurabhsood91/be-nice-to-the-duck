import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import Header from './components/Header';
import InputBox from './components/Input';
import Duck from './components/Duck';

import AudioPlayer from './components/Audio';

function App() {
    return (
        <Provider store={configureStore()}>
            <div className="App">
                <Header />
                <InputBox />
                <Duck />
                <AudioPlayer />
            </div>
        </Provider>
    );
}

export default App;
