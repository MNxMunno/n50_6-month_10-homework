import React, { Component } from "react";

const data = [
  {
    id: 1,
    title: "Quality Food",
    description:
      "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
    img: "https://i.postimg.cc/T37wqHjC/home.png",
  },
  {
    id: 2,
    title: "Food Delivery",
    description:
      "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
    img: "https://i.postimg.cc/FHN1H4Ms/deliver.png",
  },
  {
    id: 3,
    title: "Super Taste",
    description:
      "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
    img: "https://i.postimg.cc/hjxtnDk5/smile.png",
  },
];

export class Feature extends Component {
  render() {
    return (
      <section className="feature">
        <div className="container">
          <div className="content">
            <p className="title_text">FEATURE</p>
            <h2>Food with a New Passion</h2>
            <div className="cards">
              {data?.map((el) => (
                <div className="card" key={el.id}>
                  <div className="img">
                    <img src={el.img} alt="el.title" />
                  </div>
                  <h2>{el.title}</h2>
                  <p>{el.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
