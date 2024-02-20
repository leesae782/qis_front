import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement , increment, sampleValue } from './reducer/slices/sampleSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const test = useSelector((state) => state);


  


  const dispatch = useDispatch();

  const handleSetValue = () => {
    const customValue=10
    dispatch(sampleValue(customValue));
  };

  useEffect(() => {
    // sampleValue가 변경될 때 실행되는 코드
    console.log("count가 변경되었습니다.", count);
    console.log(test)
  }, [count]);


  return (
    <div className="App">
      <header className="App-header">
        
      <div>
      <div>
        <button onClick={() => dispatch(decrement())}>1씩 감소</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>1씩 증가</button>
        <button onClick={handleSetValue}>값 설정</button>
      </div>
      
    </div>





        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
