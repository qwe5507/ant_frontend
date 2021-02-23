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
import { CookiesProvider } from 'react-cookie';
import UserApiService from "./API/UserApi";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

// 2. Provide the engine to the app
// debug engine needs inlined source maps

let userDefault = { 
  loginstate : false,
  userid : '0000000000', 
  kakaoname : 'Lee Jin Gang' , 
  email : 'Kosmo5507@gmail.com',
  nickname : '',
  phone : ''
};

function reducer(state = userDefault , action) {
  if( action.type === 'login'){
    let copy = {...state};
    
    localStorage.setItem('loginstate', true);

    copy['userid'] = action.payload['userid'];
    copy['kakaoname'] = action.payload['username'];
    copy['email'] = action.payload['useremail'];
    copy['loginstate'] = action.payload['loginstate'];
    return copy;
  }
  else if(action.type === 'loginadd'){
    let copy = {...state};
    
    localStorage.setItem('loginstate', true);

    copy['nickname'] = action.payload['nickname'];
    copy['phone'] = action.payload['phone'];
    
    // console.log(copy)
    UserApiService.addUser(copy)
    .then( res => {
        alert('회원 등록성공')
      })
    .catch(err => {
        alert('에러.')
        console.log('kakao user 등록 에러', err);

      });
    // console.log(copy)
    return copy;
  }
  else if(action.type === 'logout'){
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
    <CookiesProvider>
    <BrowserRouter>
    <Provider store = {login}>
    <App />
    </Provider>
    </BrowserRouter>
    </CookiesProvider>
  </StyletronProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
