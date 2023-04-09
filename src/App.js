import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./containers/Footer";
import SigninPage from "./pages/SigninPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartComponent from "./containers/cartComponent";
import checkoutPage from "./pages/checkoutPage";
import RazorpayComponent from "./containers/paymentpage";
import Success from "./containers/payment.sucess";
function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={SigninPage} type='Signin' />
          <Route
            exact
            path='/signup'
            render={() => <SigninPage type='SignUpForm' />}
          />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/product:id' component={ProductDetailPage} />
          <Route exact path='/cart' component={CartComponent} />
          <Route exact path='/checkout' component={checkoutPage} />
          <Route exact path='/payment' component={RazorpayComponent} />
          <Route exact path='/payment/success' component={Success} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
