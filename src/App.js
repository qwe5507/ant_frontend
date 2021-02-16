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
            
            <Footer />
          </Layout>
      </Switch>
    </div>
  );
}

export default App;
