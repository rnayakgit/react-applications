import React from 'react'
import {Firstname} from './ParentComponent'

function ComponentC() {
    return (
        <div>
        <Firstname.Consumer>{(fname)=> 
        {
            return <h1>Context Accepted By {fname}</h1>
        }} 
        
        </Firstname.Consumer>
    </div>
     )
}

export default ComponentC

