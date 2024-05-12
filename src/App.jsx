import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import ClientsReviews from "./components/ClientsReviews";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const scroll = new LocomotiveScroll();


  return (
    <div className="w-full min-h-screen bg-zinc-900 overflow-x-hidden text-white  ">
      <Navbar />
      <LandingPage />
      <Marquee/>
      <About/>
      <Eyes/>
      <Feature/>
      <ClientsReviews/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
