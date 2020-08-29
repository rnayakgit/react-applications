
import React, {useState}  from 'react'  

function UseStateComponent() {
const [count, setCount] = useState(0);

    return (
        <div>
        <h6>count  : {count} </h6>
           <button onClick={ () => setCount(count + 1)}> count {count} times </button>
          <h3>trigger count time : {count}</h3>
        </div>
    )
}

export default UseStateComponent
