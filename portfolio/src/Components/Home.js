import React from "react";
import FirstPage from './FirstPage';
import Header from './Header';
import Projects from './Projects/projects';
import AboutMe from './AboutMe';
import Technologies from './Technologies/Technologies.js'
import Footer from "./Footer/Footer.js";

function Home(){

  return(
    <div>
      <Header/>
      <FirstPage />
      <AboutMe/>
      <Technologies/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Home