import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Price from "./Components/Price/Price";
import Portfolio from "./Components/Portfolio/Portfolio";
import Affiliates from "./Components/Affiliates/Affiliates";

function App() {
  return (
    
      <Router>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
          <Route path="/home">
            <Home> </Home>
          </Route>
          <Route path="/price">
            <Price></Price>
          </Route>
          <Route path="/portfolio">
          <Portfolio></Portfolio>
          </Route>
          <Route path="/affiliates">
          <Affiliates></Affiliates>
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
