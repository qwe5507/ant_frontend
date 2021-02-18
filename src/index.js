import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

// 2. Provide the engine to the app
// debug engine needs inlined source maps

let userDefault = { 
  loginstate : false,
  userid : '0000000000', 
  username : 'Lee Jin Gang' , 
  useremail : 'Kosmo5507@gmail.com'
};

function reducer(state = userDefault , action) {
  if( action.type === 'login'){
    let copy = {...state};
    
    localStorage.setItem('loginstate', true);

    copy['userid'] = action.payload['userid'];
    copy['username'] = action.payload['username'];
    copy['useremail'] = action.payload['useremail'];
    copy['loginstate'] = action.payload['loginstate'];
    return copy;
  }else if(action.type === '로그아웃'){
    console.log('1-- logout');
    let copy = userDefault
    return copy;
  }
  else {
    return state;
  }
}

let login = createStore(reducer);

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <BrowserRouter>
    <Provider store = {login}>
    <App />
    </Provider>
    </BrowserRouter>
  </StyletronProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
