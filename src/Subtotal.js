import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";
const Subtotal = () => {
  return (
    <div id="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal (0 items): <strong>{value}</strong>
            </p>
            <small>
              <input type="checkbox" /> This order contains a gift
            </small>
            <button>proceed to checkout</button>
          </>
        )}
        // value={112456.985}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        decimalScale={2}
      />
    </div>
  );
};

export default Subtotal;
