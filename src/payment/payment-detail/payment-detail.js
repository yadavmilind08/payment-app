import React from "react";

const paymentDetail = (props) => {
  return (
    <div className="payment-detail">
      <div>
        <span className="key">Product:</span>{" "}
        <span className="value">ABCD</span>
      </div>
      <div>
        <span className="key">Date:</span>{" "}
        <span className="value">{new Date().toDateString()}</span>
      </div>
      <div>
        <span className="key">Amount:</span>{" "}
        <span className="value">112.3 USD</span>
      </div>
    </div>
  );
};

export default paymentDetail;
