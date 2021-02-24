import React, { useEffect } from "react";

import Layout from "./components/layout";
import Header from "./components/common/header";
import HeroSection from "./components/homepage/HeroSection";
import Introducing from "./components/homepage/Introducing";
import Features from "./components/homepage/Features";
import Craft from "./components/homepage/Craft";
import DesignDevelopment from "./components/homepage/DesignDevelopment";
import GetStartedBanner from "./components/homepage/GetStartedBanner";
import Footer from "./components/homepage/Footer";
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Login from "./components/ants/Login/Login";
import Register from "./components/ants/Login/Register";
import Indicators from "./components/ants/Indicators";
import Backtest from "./components/ants/Backtest";
import IndicatorDetail from "./components/ants/IndicatorDetail";
import Payment from "./components/ants/Payment";
import PaymentSecond from "./components/ants/PaymentSecond";
import Community from "./components/ants/Community";
import News from "./components/ants/News";
import Stocks from "./components/ants/Stocks";
import UserApiService from "./api/UserApi";

import ChatPage from "./components/ChatPage/ChatPage";

import { useDispatch, useSelector } from 'react-redux';
import { setUserLoginCheck, setUserLogout } from './redux/actions/user_action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    initializeUserInfo();
  });

  function initializeUserInfo() {

    var user_id = localStorage.getItem('userid');
    
    if (!user_id) {
      dispatch(setUserLogout());
    }
    else {
      UserApiService.fetchUserByID(user_id)
      .then(res => {
        var nickname = res.data.nickname;
        var userinfo = { loginstate: true, userid: user_id, nickname: nickname };
        dispatch(setUserLoginCheck(userinfo));
      })
      .catch(err => {
        console.log('***** App.js fetchUserByID error:', err);
      });    }
  };

  return (
    <div className="App">
      <Switch>

        <Layout>
          <Header />

          <Route exact path="/">
            <HeroSection />
            <Introducing />
            <Features />
            <Craft />
            <DesignDevelopment />
            <GetStartedBanner />
          </Route>

          <Route exact path="/Login">
            <Login />
          </Route>

          <Route exact path="/Register">
            <Register/>
          </Route>

          <Route exact path="/Indicators">
            <Indicators />
          </Route>

          <Route exact path="/Backtest">
            <Backtest />
          </Route>

          <Route exact path="/Community">
            <Community />
          </Route>

          <Route exact path="/Community/:boardid">
            <Community />
          </Route>

          {/* <Route exact path="/Chat">
            <Chat />
          </Route> */}

          <Route exact path="/IndicatorDetail">
            <IndicatorDetail />
          </Route>

          <Route exact path="/Payment">
            <Payment />
          </Route>

          <Route exact path="/PaymentSecond">
            <PaymentSecond />
          </Route>

          <Route exact path="/ChatPage">
            <ChatPage />
          </Route>

          <Route exact path="/News">
            <News />
          </Route>

          <Route exact path="/Stocks">
            <Stocks />
          </Route>

          {/* <Route exact path="/RegisterPage">
            <RegisterPage/>
          </Route> */}

          <Footer />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
