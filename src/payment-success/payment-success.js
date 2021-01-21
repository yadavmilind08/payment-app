import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentDetail from "../payment/payment-detail/payment-detail";

const paymentSuccess = (props) => {
  const [message, setMessage] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");

  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5d8de422310000b19d2b517a")
      .then((res) => {
        console.log(res);
        setMessage(res.data.responseMessage);
        setInvoiceNo(res.data.invoiceNo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="payment-success">
      <PaymentDetail />
      <div className="success">{message}</div>
      <div>
        Invoice No: <span>{invoiceNo}</span>
      </div>
    </div>
  );
};

export default paymentSuccess;
