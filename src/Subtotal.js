import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";
const Subtotal = () => {
  return (
    <div id="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal (0 items): <strong>0</strong>
            </p>
            <small>
              <input type="checkbox" /> This order contains a gift
            </small>
            <button>proceed to checkout</button>
          </>
        )}
        value={1112456.981}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Subtotal;
