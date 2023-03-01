import React from 'react'
import {useState} from 'react'

const CounterFBC=()=> {
    let [count,setCount]= useState(0)
    console.log(count);

    let handleIncrement=()=>{
        setCount(count + 1)
 }

 let handleDecrement=()=>{
    setCount(count - 1)
 }

 let handleReset=()=>{
  setCount(0)
}

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+ INCREMENT</button>
        <button onClick={handleDecrement}>- DECREMENT</button>
        <button onClick={handleReset}> RESET</button>
    </div>
  )
}

export default CounterFBC