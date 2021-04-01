import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  return (
    <div id="header">
      <span className="logo">CODE</span>
      <div className="header-search">
        <input type="text" />
        <SearchIcon className="search-icon" />
      </div>

      <div className="nav">
        <div className="option">
          <span className="line-one">Hello</span>
          <span className="line-two">Sign in</span>
        </div>
        <div className="option">
          <span className="line-one">Return</span>
          <span className="line-two">& Orders</span>
        </div>
        <div className="option">
          <span className="line-one">Your</span>
          <span className="line-two">Membership</span>
        </div>
        <div className="option-basket">
          <ShoppingCartIcon className="cart-icon" />
          <span className="cart-count">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
