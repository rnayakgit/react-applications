import React ,{useState, useEffect} from 'react'

function UseEffectComonent() {
   const [count, setCount]= useState(0);
useEffect(() => {
document.title='useeffect demo';
});

    return (
        <div>
         <button onClick={() => setCount(count + 1)}>click{count} times </button>   
        </div>
    )
}

export default UseEffectComonent
