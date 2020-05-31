import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import Header from './components/Header';
import InputBox from './components/Input';

function App() {
    return (
        <Provider store={configureStore()}>
            <div className="App">
                <Header />
                <InputBox />
            </div>
        </Provider>
    );
}

export default App;
