import React, { Component } from 'react';
// import { createStore } from 'redux'; //lets dispatch action 
import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
import NewComponent from './NewComponent';
import './App.css';


class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.increment = this.increment.bind(this)
  //   this.decrement = this.decrement.bind(this)
  // }
  increment = ()=> {
    this.props.dispatch({type: 'INCREMENT'})
  }
  decrement= ()=> {
    this.props.dispatch({type: 'DECREMENT'})
  }
  render() {

    return (
      <div>
        <NewComponent 
        value={this.props.count}
        onIncrement={this.increment}
        onDecrement={this.decrement}
        />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    count: state.count
  };
}
// export default App;
export default connect(mapStateToProps)(App);
