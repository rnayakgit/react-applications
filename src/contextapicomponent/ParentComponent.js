import React, { createContext } from 'react'
import ComponentB from './ComponentB'

  //create context//
  const Firstname = createContext();


function ParentComponent() {
    return (
        <div>
            <Firstname.Provider value={'ranjan'}>
                <ComponentB/>
            </Firstname.Provider>

        </div>
    )
}

export default ParentComponent;
export {Firstname};