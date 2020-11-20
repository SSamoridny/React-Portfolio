import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./views/Portfolio";
import About from "./views/About";
import Home from "./views/Home";
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return ( <Router>
    <div class="body" style={style}>
      <Navbar />
      <div className="container">
      
          <Route exact path="/React-Portfolio/Portfolio" component={Portfolio}/>
            
          <Route exact path="/React-Portfolio/About" component={About}/>
          
          <Route exact path="/React-Portfolio/" component={Home}/>
      
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

var style = {
  paddingBottom: "5rem",
};
export default App;
