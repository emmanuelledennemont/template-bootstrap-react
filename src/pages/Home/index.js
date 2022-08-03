import React from "react";

import Banner from "../../components/Banner";
import Serv from "../../components/Serv";
import About from "../../components/About";
import User from "../../components/User";
import Pricing from "../../components/Pricing";

const Home = (props) => {
  const { servicesRef, aboutRef, pricingRef } = props;
  return (
    <>
      <Banner />
      <Serv servicesRef={servicesRef} />
      <About aboutRef={aboutRef} />
      <User />
      <Pricing pricingRef={pricingRef} />
    </>
  );
};

export default Home;
