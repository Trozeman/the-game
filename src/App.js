import React from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import configureStore from './store';
import {Provider} from 'react-redux';

const initialState = {
    game: {
        user: '',
        size: 0,
        difficulty: null,
        onProgress: false,
    },
    activeCell: null,
    score: {
        cpu: 0,
        player: 0
    }
};

const store = configureStore(initialState);

function App() {

    return (
        <Provider store={store}>
            <GameContainer />
        </Provider>
    );
}

export default App;
