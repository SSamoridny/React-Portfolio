import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./views/Portfolio";
import About from "./views/About";
import Home from "./views/Home";
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div class="body" style={style}>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

var style = {
  paddingBottom: "5rem",
};
export default App;
