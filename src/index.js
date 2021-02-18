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

let 유저초깃값 = { loginstate : false ,userid : '0000', username : 'Lee Jin Gang' , useremail : 'Kosmo5507@gmail.com'};

function reducer(state = 유저초깃값 , 액션) {
  if( 액션.type === '로그인'){
    console.log(액션.payload)
    let copy = {...state}
    copy['userid'] = 액션.payload['userid']
    copy['username'] = 액션.payload['username']
    copy['useremail'] = 액션.payload['useremail']
    copy['loginstate'] = 액션.payload['loginstate'];
    return copy;
  }else if(액션.type === '로그아웃'){
    let copy = 유저초깃값
    return copy;
  }
  else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <BrowserRouter>
    <Provider store = {store}>
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
