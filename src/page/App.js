import React from 'react';
import Header from "../components/Header";
import BannerSection from "../components/Banner";
import TestSeriesInfo from "../components/TestSeriesInfo";
import Faqs from "../components/Faqs";
import AllTests from "../components/AllTests";


function App() {
  return (
    <React.Fragment>
      <Header/>
      <main className="layout flex-1">
        <BannerSection/>
        <TestSeriesInfo/>
        <AllTests/>
        <Faqs/>
      </main>
    </React.Fragment>
  );
}

export default App;
