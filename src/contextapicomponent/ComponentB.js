import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UseContextComponent from './UseContextComponent'
class ComponentB extends Component {
    render() {
        return (
            <div>
                <ComponentC/>
                <UseContextComponent/>
            </div>
        )
    }
}

export default ComponentB
