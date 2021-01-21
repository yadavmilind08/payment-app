import React from "react";
import PaymentDetail from "./payment-detail/payment-detail";
import PaymentForm from "./payment-form/payment-form";

const payment = (props) => {
  return (
    <div className="payment">
      <PaymentDetail />
      <PaymentForm />
    </div>
  );
};

export default payment;
