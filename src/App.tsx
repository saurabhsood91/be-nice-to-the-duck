import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import Header from './components/Header';

function App() {
    return (
        <Provider store={configureStore()}>
            <div className="App">
                <Header />
            </div>
        </Provider>
    );
}

export default App;
