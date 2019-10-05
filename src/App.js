import React from 'react';
import './App.css';
import GridContainer from './containers/GridContainer';
import configureStore from './store';
import { Provider } from 'react-redux';

const initialState = {
    game: {
        user: '',
        size: 3,
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

function App() {
/*    setTimeout(()=>{
        // let q = Math.floor(Math.random() * 9);
        // store.dispatch({type: 'SET_ACTIVE_CELL', index:q});
    }, 2000);*/
  return (
    <Provider store={store}>
        <GridContainer store={store} />
    </Provider>
  );
}

export default App;
