import "./Home.scss";
import Product from "./Product";
import bg from "./img/home-bg.jpg";
const Home = () => {
  return (
    <div id="home">
      <img className="background" src={bg} alt="" />
      <div className="home-container">
        <div className="row">
          <Product
            title="whatIs"
            price="1.09"
            rating="3"
            img="https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"
          />
          <Product
            title="whatIs"
            price="999.09"
            rating="3"
            img="https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"
          />
          <Product
            title="whatIs"
            price="1999999.09"
            rating="5"
            img="https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"
          />
        </div>
        <div className="row">
          <Product
            title="second"
            price="1999999.09"
            rating="5"
            img="https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"
          />
          <Product
            title="second"
            price="1999999.09"
            rating="5"
            img="https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"
          />
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default Home;
