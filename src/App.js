import React from 'react';
import './App.css';
import GridContainer from './containers/GridContainer';
import configureStore from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {postReq, getReq} from './services';

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

    console.log(
        postReq("/winners", {name: "POST TEST123"}),
        getReq('/game-settings'),
        getReq('/winners'),
    );

    return (
        <Provider store={store}>
            <Router>
                <Route path="/game-settings">
                    <h1>
                        game-settings
                    </h1>
                </Route>
                <Route path="/" exact>
                    <GridContainer store={store}/>
                </Route>
            </Router>

        </Provider>
    );
}

export default App;
