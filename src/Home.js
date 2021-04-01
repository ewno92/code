import "./Home.scss";
import Product from "./Product";
import bg from "./img/home-bg.jpg";
const Home = () => {
  return (
    <div id="home">
      <img className="background" src={bg} alt="" />
      <div className="row">
        <Product />
      </div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
};

export default Home;
