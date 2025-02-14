import { useState } from "react";

import "./App.css";

function App() {
  const [counter, SetCounter] = useState(15); //const[variable,function] = useState(15). initial variable value is 15

  // const addValue = () => {
  //  SetCounter(counter + 1);
  //    SetCounter(counter + 1);  //Due to batching. This line does nothing.Same as next line
  //      SetCounter(counter + 1);

  // };

  const addValue2 = () => {
    SetCounter((anything) => anything + 1); //this updates counter variable despite using a different variable name
    SetCounter((anything) => anything + 1); //wont be batched since prevcounter is needed
  };

  const removeValue = () => {
    let newcounter = counter - 1;
    SetCounter(newcounter); //this updates counter variable despite using a different variable name
    SetCounter(newcounter); //Due to batching. This line does nothing.Same as next line
    SetCounter(newcounter);
  };

  return (
    <>
      <h1>React course with Hola {counter}</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue2}>Add value</button> {"    "}
      <button onClick={removeValue}>remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
