import React, { Component } from 'react';

class NewComponent extends Component {

    check() {
        console.log("test")
    }
    render() {
        console.log(this.props.value)
        return (
            <div>
                <h1>{this.props.value}</h1> 
    <button onClick={this.props.onIncrement}>+</button>
    <button onClick={this.props.onDecrement}>-</button>
            </div>
        )
    }
}

export default NewComponent;