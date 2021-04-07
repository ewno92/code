import "./Product.scss";
const Product = ({ title, price, img, rating }) => {
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
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
