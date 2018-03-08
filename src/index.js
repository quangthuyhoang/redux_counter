import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; //lets dispatch action 
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import Counter from './Counter';
import registerServiceWorker from './registerServiceWorker';

const initState = {
    count: 0
}
function counter(state = initState, action) {
    console.log(action)

    switch(action.type) {
        case 'INCREMENT':
            return {
               count: state.count + 1
            }
        case 'DECREMENT':
        return {
            count: state.count - 1
         }
        default:
            return state
    }
}
const store = createStore(counter) // enter 'Reducer' function into store to create a new store
// store.dispatch({type: 'DECREMENT'})
const Root = () => (
    <Provider store={store} >
        <App />
    </Provider>
)
        

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
