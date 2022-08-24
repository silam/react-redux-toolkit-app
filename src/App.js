import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, 
  decrement , increaseByAmount
} from './redux/slices/counerSlices';


function App() {

  const dispatch = useDispatch();

  const counter = useSelector((state => state?.counter));
  console.log(counter)

  return (
    <div className="App">
      <h1>Redux Toolkit counter</h1>
      <h2>Counter {counter?.value}</h2>


      <button onClick={()=>dispatch(increment())}>+</button>

      <button onClick={()=>dispatch(decrement())}>-</button>

      <button onClick={()=>dispatch(increaseByAmount(20))}>Increase Amount</button>

    </div>
  );
}

export default App;
