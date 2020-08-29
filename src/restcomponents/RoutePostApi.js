import React, { Component } from 'react'
import axios from 'axios';

 class RoutePostApi extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userid  :'',
              title : '',
              body : ''
         }
     }
//event handler for every state field//
 Changehandler = (e) => {
        e.preventDefault();
        console.log(e);
        this.setState({[e.target.name] : e.target.value})
     }
    
OnSubmitHandler = e => {
    e.preventDefault();
    console.log(e);
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then(response =>{
    console.log('response recieved',response);
     this.setState({
         posts : response.data
     })
}).catch(error => {
console.log(`error : ${error}`);
})


}

     
    render() {
        const {userid, title, body}=this.state
        return (
            <div>
     <form  onSubmit={this.OnSubmitHandler}>
         UserID:<input type='text' value={this.userid}/><br/>
         Title:<input type='text' value={this.title}/><br/>
         Body :<input type='text' value ={this.body}/><br/>
     <button onSubmit={this.Changehandler}>click</button>
    </form>           
    </div>
        )
    }
}

export default RoutePostApi
