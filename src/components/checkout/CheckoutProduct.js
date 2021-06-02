import "./CheckoutProduct.scss";
import { useStateValue } from "../../StateProvider";
const CheckoutProduct = ({ id, title, price, img, rating }) => {
  const convertRating = () => {
    switch (rating) {
      case 2:
        return "★☆☆☆☆";
      case 2:
        return "★★☆☆☆";
      case 3:
        return "★★★☆☆";
      case 4:
        return "★★★★☆";
      case 5:
        return "★★★★★";
      default:
        return "☆☆☆☆☆";
    }
  };
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //remove selected item from the basket
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <div id="checkoutProduct">
      <img src={img} alt="" />

      <div className="info">
        <p>{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        {convertRating()}
        {console.log(typeof rating)}
        <button onClick={removeFromBasket}>remove</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
