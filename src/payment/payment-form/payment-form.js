import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import {
  AntDatePicker,
  AntInput,
  AntSelect,
} from "../../ant-component/ant-component";
import {
  validateDate,
  validateEmail,
  isRequired,
  validateCardNumber,
} from "../../validate-fields/validate-fields";

export const dateFormat = "MM-YY";

const initialValues = {
  cardType: "",
  cardNumber: "",
  expiryDate: null,
  name: "",
  email: "",
};

const paymentForm = (props) => {
  const history = useHistory();
  const [cardTypes, setCardTypes] = useState([]);
  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5d145fa22f0000ff3ec4f030")
      .then((res) => {
        const types = res.data.cardTypes;
        const filteredCardTypes = [];
        types.forEach((x) => {
          if (x.value.toLowerCase() !== "JCB".toLowerCase()) {
            filteredCardTypes.push(x.value);
          }
        });
        setCardTypes(filteredCardTypes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (formProps) => {
    console.log(formProps);
    history.push("/payment-success");
  };

  return (
    <div className="payment-form">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form>
            <Field
              component={AntSelect}
              name="cardType"
              label="Card Type"
              defaultValue={initialValues.cardType}
              selectOptions={cardTypes}
              validate={isRequired}
              tokenSeparators={[","]}
              style={{ width: 200 }}
              hasFeedback
            />

            <Field
              component={AntInput}
              name="cardNumber"
              label="Card Number"
              type="number"
              validate={validateCardNumber}
              defaultValue={initialValues.cardNumber}
              hasFeedback
            />

            <Field
              component={AntDatePicker}
              name="expiryDate"
              label="Expiry Date"
              defaultValue={initialValues.expiryDate}
              format={dateFormat}
              validate={validateDate}
              hasFeedback
            />

            <Field
              component={AntInput}
              name="name"
              type="text"
              label="Name"
              defaultValue={initialValues.name}
              validate={isRequired}
            />

            <Field
              component={AntInput}
              name="email"
              type="email"
              label="Email"
              defaultValue={initialValues.email}
              validate={validateEmail}
              hasFeedback
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default paymentForm;
