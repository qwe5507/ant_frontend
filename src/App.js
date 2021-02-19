import React from "react"

import Layout from "./components/layout"
import Header from "./components/common/header"
import HeroSection from "./components/homepage/HeroSection"
import Introducing from "./components/homepage/Introducing"
import Features from "./components/homepage/Features"
import Craft from "./components/homepage/Craft"
import DesignDevelopment from "./components/homepage/DesignDevelopment"
import GetStartedBanner from "./components/homepage/GetStartedBanner"
import Footer from "./components/homepage/Footer"
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Login from "./components/login/login"
import Indicators from "./components/ants/Indicators"
import Backtest from "./components/ants/Backtest"
import LineChartIn from "./components/ants/LineChartIn"
import LineChartIn2 from "./components/ants/LineChartIn2"
import LineChartIn3 from "./components/ants/LineChartIn3"
import IndicatorDetail from "./components/ants/IndicatorDetail"
import Payment from "./components/ants/Payment"

function App() {
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
              <Login/>
            </Route>

            <Route exact path="/Indicators">
              <Indicators/>
            </Route>

            <Route exact path="/Backtest">
              <Backtest/>
            </Route>
           
            <Route exact path="/IndicatorDetail">
              <IndicatorDetail/>
            </Route>

            <Route exact path="/Payment">
              <Payment/>
            </Route>
                 
            <Footer />
          </Layout>
      </Switch>
    </div>
  );
}

export default App;
