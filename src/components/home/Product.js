import "./Product.scss";
import { useStateValue } from "../../StateProvider";

const Product = ({ title, price, img, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket", basket);

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        // id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };
  const convertRating = () => {
    switch (rating) {
      case "1":
        return "★☆☆☆☆";
      case "2":
        return "★★☆☆☆";
      case "3":
        return "★★★☆☆";
      case "4":
        return "★★★★☆";
      case "5":
        return "★★★★★";
      default:
        return "☆☆☆☆☆";
    }
  };

  return (
    <div id="product">
      <div className="info">
        <span>{title}</span>
        <span className="price">
          <small>$</small>
          <strong>{price}</strong>
        </span>
        <div className="rating">{convertRating()}</div>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
