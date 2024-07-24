import React, {useState} from 'react'

export default function Counter() {
    // let count =0;
    const[count, setCount] = useState(0)
const increment =()=>
{
    // console.log("increment")
    // count++;
    setCount(count+1); // dont use count++, count is a constant , 
    // so here we are passing a parameter to add 1 in it in the setCount
}
const decrement =()=>{
    setCount(count-1); // dont use count--

    // state updates should be immutable nad should use setter function provided by useState
    // to ensure correctly updates and re-renders the compinent 
}
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {/* // dont use brackets after function passed */}
        {/* create a state to increase the actual value re-render again after creating a state */}
        {/* <button>-</button> */}
    </div>
  )
}
