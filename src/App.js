import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import OrderPlace from "./Pages/OrderPlace/OrderPlace";
import AllProducts from "./Pages/Home/AllProducts/AllProducts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/aboutUs">{/* <AboutUs/> */}</Route>
            <Route path="/myOrders">
              <MyOrders />
            </Route>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
            <PrivateRoute path="/orderPlace/:id">
              <OrderPlace />
            </PrivateRoute>
            <Route path="/allProducts">
              <AllProducts />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
