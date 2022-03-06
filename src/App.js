import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counter);
  const [input, setInput] = useState("");

  return (
    <div style={{padding: 32}}>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      &nbsp;
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <br />
      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
      &nbsp;
      <button onClick={()=>{dispatch(incrementByAmount(Number(input)))}}>incrementByAmount</button>
      &nbsp;
      <button onClick={()=>{dispatch(decrementByAmount(Number(input)))}}>decrementByAmount</button>
      <br />
      <button onClick={()=>{dispatch(reset())}}>reset</button>
    </div>
  );
}

export default App;
