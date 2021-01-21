import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Payment from "./payment/payment";
import PaymentSuccess from "./payment-success/payment-success";
import "./App.css";

const app = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/payment" component={Payment} />
        <Route path="/payment-success" component={PaymentSuccess} />
        <Redirect to="/payment" />
      </Switch>
    </div>
  );
};

export default app;
