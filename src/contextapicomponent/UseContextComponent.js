import React, { createContext } from 'react'
import {Firstname} from './ParentComponent'

const [Firstname] = createContext();
function UseContextComponent() {
    return (
        <div>
            <h1> {Firstname}</h1>
        </div>
    )
}

export default UseContextComponent
