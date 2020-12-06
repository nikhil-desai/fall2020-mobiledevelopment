import React, { useReducer } from 'react';
import {state, reducer} from './components/ApplicationState';
import Counter from './components/Counter';
import './App.css';

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <h1>Week 14: Workout with Reducers</h1>
      <Counter currentState={currentState} dispatch={dispatch}/>
    </div>
  );
}

export default App;
