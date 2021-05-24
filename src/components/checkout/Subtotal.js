import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div id="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small>
              <input type="checkbox" /> This order contains a gift
            </small>
            <button onClick={console.log(getBasketTotal(basket))}>
              proceed to checkout
            </button>
          </>
        )}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        decimalScale={2}
      />
    </div>
  );
};

export default Subtotal;
