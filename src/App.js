import React, { useEffect } from "react";

import Layout from "./components/layout";
import Header from "./components/common/header";
import HeroSection from "./components/homepage/HeroSection";
import SearchPanel from "./components/ants/SearchPanel";
import MainPanels from "./components/ants/MainPanels";
import Introducing from "./components/homepage/Introducing";
import Footer from "./components/homepage/Footer";
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from "./components/ants/Login/Login";
import Register from "./components/ants/Login/Register";
import Indicators from "./components/ants/Indicators";
import Backtest from "./components/ants/Backtest";
import IndicatorDetail from "./components/ants/IndicatorCompo/IndiDetail/pages/IndicatorDetail";
import IndicatorDetail1 from "./components/ants/IndicatorCompo/IndiDetail/pages/IndicatorDetail1";
import IndicatorDetail2 from "./components/ants/IndicatorCompo/IndiDetail/pages/IndicatorDetail2";
import IndicatorDetailExeFor from "./components/ants/IndicatorCompo/IndiDetail/pages/IndicatorDetailExeFor";
import Payment from "./components/ants/Payment";
import PaymentSub from "./components/ants/PaymentSub";
import PaymentFirst from "./components/ants/PaymentFirst";
import Community from "./components/ants/Community";
import News from "./components/ants/News";
import Stocks from "./components/ants/Stocks";
import UserApiService from "./api/UserApi";
import NewsDetail from "./components/ants/NewsDetail";
import BlockTest from "./components/test/BlockTest";
import Profile from "./components/ants/Profile";
import ChatPage from "./components/ChatPage/ChatPage";
import Logout from "./components/ants/Logout";

import BoardApiService from "./api/BoardApi";

import { useDispatch, useSelector } from 'react-redux';
import { setUserLoginCheck, setUserLogout, setUser, setSavedBoards } from './redux/actions/user_action';

import firebase from "./firebase";

function App() {
  const dispatch = useDispatch();
  let history = useHistory();

  const loginstate = useSelector(state => state.user.loginstate);

  useEffect(() => {
    // console.log("1")
    initializeUserInfo();
  },[]);

  // 새로고침시 Redux State 세팅
  function initializeUserInfo() {

    var user_id = localStorage.getItem('userid');

    if (!user_id) {
      dispatch(setUserLogout());
    }
    else {
      UserApiService.fetchUserByID(user_id)
        .then(res => {
          if (res.data.nickname) {
            // Redux State 세팅
            var nickname = res.data.nickname;
            var userinfo = { loginstate: true, userid: user_id, nickname: nickname };
            dispatch(setUserLoginCheck(userinfo));

            // Firebase Redux State 세팅
            firebase.auth().onAuthStateChanged(user => {
              if (user) {
                dispatch(setUser(user));
              } else {
                // Firebase만 로그아웃 된 경우 처리 필요
                // dispatch(clearUser());
              }
            });
          }
          else {
            localStorage.removeItem('userid');
            dispatch(setUserLogout());
            history.push('/');
          }
        })
        .catch(err => {
          console.log('***** App.js fetchUserByID error:', err);
        });
// 여기 
        BoardApiService.fetchSavedUserBoardCheck(user_id)
        .then(res =>{
            var data = { savedBoards: res.data };
            dispatch(setSavedBoards(data));
            console.log('App.js dispatch')
        })
        .catch(err =>{
          console.log('***** Community fetchSavedUserBoardCheck error:', err);
        })
    }
  };

  return (
    <div className="App">
      <Switch>

        <Layout>
          <Header />

          <Route exact path="/">
            {
              loginstate
              ?
              ""
              :
              <HeroSection />
            }

            <SearchPanel />
            <MainPanels component={MainPanels} />
            <Introducing />
            {/* <Features />
            <Craft />
            <DesignDevelopment />
            <GetStartedBanner /> */}
          </Route>

          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Indicators" component={Indicators} />
          <Route exact path="/Backtest" component={Backtest} />
          <Route exact path="/Community" component={Community} />
          <Route exact path="/Community/:boardid" component={Community} />
          <Route exact path="/IndicatorDetailExeFor/:symbol" component={IndicatorDetailExeFor} />
          <Route exact path="/IndicatorDetail" component={IndicatorDetail} />
          <Route exact path="/IndicatorDetail1/:tableName" component={IndicatorDetail1} />
          <Route exact path="/IndicatorDetail2/:tableName" component={IndicatorDetail2} />
          <Route exact path="/PaymentFirst" component={PaymentFirst} />
          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/PaymentSub" component={PaymentSub} />
          <Route exact path="/ChatPage" component={ChatPage} />
          <Route exact path="/News" component={News} />
          <Route exact path="/NewsDetail/:search" component={NewsDetail} />
          <Route exact path="/Stocks" component={Stocks} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Logout" component={Logout} />
          <Route exact path="/Test" component={BlockTest} />

          <Footer />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;