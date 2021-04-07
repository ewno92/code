import React from "react";
import "./Checkout.scss";
import Subtotal from "./Subtotal";
const Checkout = () => {
  return (
    <div id="checkout">
      <div className="container-left">
        <h2 className="title">Your shopping Basket</h2>
      </div>

      <div className="container-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
