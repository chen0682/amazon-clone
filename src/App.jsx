import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
           
          <Route path="/">
            {/* <Header /> */}
            {/* <h1>I am the Home Page, smash the like button.</h1> */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
