import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.scss";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div id="checkout">
      <div className="container">
        <div className="container-left">
          <h2 className="title">Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.image}
              rating={item.rating}
              img={item.img}
            />
          ))}
        </div>

        <div className="container-right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
