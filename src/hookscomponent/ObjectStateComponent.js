import React, {useState} from 'react'

function ObjectStateComponent() {
const[name , setObject] = useState({FirstName : '', LastName : ''})


    return (
        <div>
           <form>
 
 FirstName :<input type='text' onChange={ e =>setObject({...name , FirstName : e.target.value}) }/>
 LastName :<input type='text' onChange={ e =>setObject({...name , LastName : e.target.value}) }/>
 <h4>{JSON.stringify(name)}</h4>
<h4>{name.FirstName}</h4>
<h4>{name.LastName}</h4>
            </form>


        </div>
    )
}

export default ObjectStateComponent
