import {useState} from 'react';
import './App.css';

function App() {

  /* #1 - practice useState */

  const [inputName, setInputName] = useState('')
  const [count, setCount] = useState(0);
  // console.log(useState(0))
  // => [0, function]
  // In this case, [count, setCount] = [0, function] --- (Destructuring)
  // count = 0, setCount = function.
  
  // Normal varialble
  let normalVariable = 0;
  const setNormalVariable= () => {
    normalVariable = normalVariable + 1;
    console.log(normalVariable)
  }

  // State of React
  const setStateVariable = () => {
    setCount(count + 1);
  }

  // Practice get input value
  const onChangeHandler = (event) => {
    setInputName(event.target.value)
  }

  return (
    <div className="container">
      <div className="card">
        <div>
          <p>user id</p>
          <h1>title</h1>
          <p>content</p>
          {/* #1 - practice useState (Delete later) */}
          {/* For checking what differents are normal variable and state of React */}
          {/* The most important thing is if rendering html or not */}
          <br />
          <button onClick={setNormalVariable}>NormalCount</button>
          <button onClick={setStateVariable}>StateCount</button>
          <div>{`NormalVariable: ${normalVariable}`}</div>
          <div>{`StateVariable: ${count}`}</div>
          {/* Get input value */}
          <br />
          <input type="text" onChange={onChangeHandler} placeholder="Get value test"/>
          <div>{inputName}</div>
          {/*  */}
        </div>
      </div> 
    </div>
  );
}

export default App;
