import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          image="https://m.media-amazon.com/images/I/81XEPquUw3L._AC_UL320_.jpg"
          title="Amazon Brand - Solimo 12-inch Wall Clock - Classic Roulette (Silent Movement, Black Frame)"
          price={624}
          rating={4}
        />
        <Product
          id="2"
          image="https://m.media-amazon.com/images/I/41niH-BNuvL._AC_SR400,600_.jpg"
          title="You are the Best Wife: A True Love Story"
          price={499}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          image="https://m.media-amazon.com/images/I/71mYRzElTAL._AC_UY218_.jpg"
          title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/256GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg), XMA1901-FC+Webcam"
          price={(43, 999)}
          rating={4}
        />
        <Product
          id="4"
          image="https://images-eu.ssl-images-amazon.com/images/I/31Za9ooooCL._AC_US160_.jpg"
          title="JBL C100SI In-Ear Deep Bass Headphones with Mic (Black)"
          price={699}
          rating={4}
        />
        <Product
          id="5"
          image="https://images-na.ssl-images-amazon.com/images/I/71ZIrJ6XLLL._SY450_.jpg"
          title="Mi Band 3 (Black)"
          price={(1, 399)}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          image="https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SL1500_.jpg"
          title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver"
          price={(12, 999)}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
