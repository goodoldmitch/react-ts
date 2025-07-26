import { useState } from "react"

function Counter () {

    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter + 1);
    };
    
    function reset(){
        setCounter(0);
    };

    function decrement(){
        setCounter(counter - 1);
    };

    return(
        <div className="container">
          <div className="counter">{counter}</div>
          <div className="buttons-block">
            <button className="increment" onClick={increment}>+</button>
            <button className="delete" onClick={reset}>DEL</button>
            <button className="decrement" onClick={decrement}>-</button>
          </div>
        </div>
    )
}

export default Counter