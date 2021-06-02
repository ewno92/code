import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    {
      console.log("user");
    }
  };
  return (
    <div id="header">
      <Link className="text-deco-none" to="/">
        <span className="logo">CODE</span>
      </Link>
      <div className="header-search">
        <input type="text" />
        <SearchIcon className="search-icon" />
      </div>

      <div className="nav">
        {/* <div className="option">
          <span className="line-one">Hello</span>
          <span className="line-two">Sign in</span>
        </div> */}

        <Link className="text-deco-none" to="/login">
          <div className="option" onClick={handleAuth}>
            <span className="line-one">Hello</span>
            <span className="line-two">{user ? "Sign Out" : "Sign in"}</span>
          </div>
        </Link>

        <div className="option">
          <span className="line-one">Return</span>
          <span className="line-two">& Orders</span>
        </div>
        <div className="option">
          <span className="line-one">Your</span>
          <span className="line-two">Membership</span>
        </div>

        <Link className="text-deco-none" to="/checkout">
          <div className="option-basket">
            <ShoppingCartIcon className="cart-icon" />
            <span className="cart-count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
