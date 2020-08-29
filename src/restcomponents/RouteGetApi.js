import React, { Component } from 'react'
import axios from 'axios';
class RouteGetApi extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts: [],
              errorCaught:''
         }
     }
      componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
        console.log('response recieved',response);
         this.setState({
             posts : response.data
         })
}).catch(error => {
    console.log(`error : ${error}`);
})

      }
    
    render() {
        return (
            <div>
                response of total api's : {this.state.posts.length} 
            </div>
        )
    }
}

export default RouteGetApi
