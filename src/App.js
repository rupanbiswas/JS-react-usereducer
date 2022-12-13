import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  if (action.type === 'DECREMENT') {
    return state - 1;
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div className="App">
      <p>Rupan</p>
      <p>{state}</p>
      <div className='btnStylePosition'>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}> INC </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>DEC</button>
      </div>
    </div>
  );
}

export default App;
