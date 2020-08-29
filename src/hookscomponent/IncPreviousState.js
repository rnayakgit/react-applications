import React, {useState} from 'react'

function IncPreviousState() {
    var initialState = 0;
    const [count, setCount] = useState(initialState)
 
  const  incrementFive = () => {
      for (let i =0 ; i<5 ; i++){
        setCount( prevcount =>  prevcount +1)  // check previous old count value sets value and pass to function
      }
     
 }

    return (
        <div>
            <h6>count  : {count} </h6>
           <button onClick={ () => setCount(count + 1)}>increment</button>
           <button onClick={() =>setCount(count - 1)}>decrement</button> 
           <button onClick={incrementFive}>increment 5</button> 
           <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}

export default IncPreviousState
