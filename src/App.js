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

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <HeroSection />
        <Introducing />
        <Features />
        <Craft />
        <DesignDevelopment />
        <GetStartedBanner />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
