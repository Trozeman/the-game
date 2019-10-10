import React from 'react';
import './App.css';
import GridContainer from './containers/GridContainer';
import configureStore from './store';
import {Provider} from 'react-redux';

const initialState = {
    game: {
        user: '',
        size: 0,
        difficulty: null,
        onProgress: false
    },
    activeCell: null,
    score: {
        cpu: 0,
        player: 0
    }
};

const store = configureStore(initialState);

window.store = store;

function App() {

    return (
        <Provider store={store}>
            <GridContainer />
        </Provider>
    );
}

export default App;
