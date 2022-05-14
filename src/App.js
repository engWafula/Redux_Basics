
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { actions } from './store';

function App() {

  const counter=useSelector(state=>state.count);
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch(actions.increment());
  }
  const decrement=()=>{
    dispatch(actions.decrement());
  }

  const add=()=>{
   dispatch(actions.add(10));
  }
  return (
    <div className="App">
      <h1>Counter:</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add}>Add by 10</button>
    </div>
  );
}

export default App;
