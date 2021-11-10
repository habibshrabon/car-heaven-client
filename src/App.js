import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Sidebar from "./Pages/Dashboard/Sidebar/Sidebar";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/sidebar">
            <Sidebar />
          </Route>
          <Route path="/myOrders">
            <MyOrders />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
