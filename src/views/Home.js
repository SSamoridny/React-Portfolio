import React from "react";
import Jumbotron from '../components/Jumbotron'
import Portfolio from '../views/Portfolio'
import About from '../views/About'

function Home(props) {
  return (
    <div>
      <Jumbotron/>
      <Portfolio/>
      <About/>
    </div>
  );
}

export default Home;
