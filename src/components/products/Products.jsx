import React, { Component } from "react";
import { IoStar } from "react-icons/io5";

const data = [
  {
    id: 1,
    title: "Vegie Muffen",
    info: "There are many things are needed to start the Fast Food Business.",
    price: 16,
    rating: 4,
    img: "https://i.postimg.cc/tgJGCSDM/pro-1.png",
  },
  {
    id: 2,
    title: "Salads",
    info: "There are many things are needed to start the Fast Food Business.",
    price: 12,
    rating: 5,
    img: "https://i.postimg.cc/g07FwVTk/pro-2.png",
  },
  {
    id: 3,
    title: "Burger",
    info: "There are many things are needed to start the Fast Food Business.",
    price: 10,
    rating: 3,
    img: "https://i.postimg.cc/brX7gzP7/pro-3.png",
  },
  {
    id: 4,
    title: "Delmonico Steak dish",
    info: "There are many things are needed to start the Fast Food Business.",
    price: 14,
    rating: 2,
    img: "https://i.postimg.cc/rsSvYvFK/pro-4.png",
  },
  {
    id: 5,
    title: "Egg Masala",
    info: "There are many things are needed to start the Fast Food Business.",
    price: 9,
    rating: 4,
    img: "https://i.postimg.cc/15rk0hjd/pro-5.png",
  },
  {
    id: 6,
    title: "Peach Melba dish",
    info: "There are many things are needed to start the Fast Food Business.",
    price: 15,
    rating: 3,
    img: "https://i.postimg.cc/4x8jMvZb/pro-6.png",
  },
];

export class Products extends Component {
  render() {
    return (
      <section className="products">
        <div className="container">
          <div className="content">
            <p className="title">Menu</p>
            <h2>Food Full of treaty Love</h2>
            <p>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers,{" "}
            </p>
            <div className="cards">
              {data?.map((el) => (
                <div key={el.id} className="card">
                  <img src={el.img} alt={el.title} />
                  <div className="card__content">
                    <div className="title">
                      <h3 className="card__title">{el.title} </h3>
                      <b className="price">{el.price}$</b>
                    </div>
                    <p>{el.info}</p>
                    <div className="btns">
                      <button className="plus">+</button>
                      <div className="stars">
                        {new Array(Math.round(el.rating)).fill(<IoStar />)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
