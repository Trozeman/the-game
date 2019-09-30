import React from 'react';
import './App.css';
import GridComponent from './components/GridComponent';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <Provider className="App" store={store}>
      <GridComponent />
    </Provider>
  );
}

export default App;
