import React from 'react';
import './App.css';
import GridContainer from './containers/GridContainer';
import configureStore from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {renderToString} from 'react-dom/server';

const initialState = {
    game: {
        user: '',
        size: 0,
        difficulty: 1,
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


    fetch('/winners', {
        method: 'POST',
        mode: 'cors',
        referrer: 'no-referrer',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: "POST TEST"}),
        test: 123
    })
        .then(response => response.json())
        .then(e => console.log(e));


    fetch('/game-settings')
        .then(response => response.json())
        .then(e => console.log(e));
    fetch('/winners')
        .then(response => response.json())
        .then(e => console.log(e));
    return (
        <Provider store={store}>
            <Router>
                <Route path="/home" render={() => renderToString('{"DATA": OK}')}/>
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
