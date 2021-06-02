import "./Home.scss";
import Product from "./Product";
import bg from "../.././img/home-bg.jpg";
const Home = () => {
  return (
    <div id="home">
      <img className="background" src={bg} alt="" />
      <div className="home-container">
        <div className="row">
          <Product
            id="123"
            title="laptop"
            price={1.09}
            rating={2}
            img="https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"
          />
          <Product
            id="1232"
            title="headphone"
            price={99.09}
            rating={3}
            img="https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612__340.jpg"
          />
          <Product
            id="1234566"
            title="notebook"
            price={54.09}
            rating={5}
            img="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745__340.jpg"
          />
        </div>
        <div className="row">
          <Product
            id="1231515"
            title="flower"
            price={4.09}
            rating={1}
            img="https://cdn.pixabay.com/photo/2016/11/18/19/02/roses-1836420__340.jpg"
          />
          <Product
            id="123346"
            title="frame"
            price={2.09}
            rating={2}
            img="https://cdn.pixabay.com/photo/2015/06/08/15/09/phone-801891__340.jpg"
          />
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default Home;
