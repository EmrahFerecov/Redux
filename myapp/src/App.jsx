
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/counterSlice';

function App() {
  const count = useSelector(state => state.counter.deyer)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementByUser = () => {

  }


  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrementByUser}>Increment by user</button>

    </div>
  );
}

export default App;

