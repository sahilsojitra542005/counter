import React, { useState } from 'react'

function Counter(){
    let [counter,setCounter] = useState(0)

    const increment =() =>{
        setCounter(counter+1)
    }

    const decrement =()=>{
        setCounter(counter-1)
    }
  
    return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>increment</button>

      <br/>

      <button onClick={decrement}>decrement</button>

    </div>
  )
}

export default Counter
