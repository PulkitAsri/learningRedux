import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {createStore} from "redux";
import allReducers from "./reducers";
import {Provider} from "react-redux";


// //REDUX BASICS NOTES 

// //1-> Store
// //2-> Actions

// //functions that return a JS_object
// const increment =()=>{
//     return {
//         type: "INCREMENT"
//     }
// }

// const  decrement =()=>{
//     return {
//         type: "DECREMENT"
//     }
// }


// //3-> Reducer

// //state=0

// const counter = (state = 0, action)=>{
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
            
//         case "DECREMENT":
//             return state - 1;
        
//     }

// }


// //adding this function to store

// let store = createStore(counter);
// store.subscribe(()=> console.log(store.getState()));

// //4-> Dispatch 
// store.dispatch(increment());

let store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById("root"));
