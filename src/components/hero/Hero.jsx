import React, { Component } from "react";
import hero from "../../assets/images/hero__img.jpg";

export class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="cards">
            <div className="card">
              <h1>Making time a good time by making food the good food.</h1>
              <p>
                There are many things are needed to start the Fast Food
                Business. You need not only Just Food Stalls with Persons but
                also specialized equipment,
              </p>
            </div>
            <div className="card">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
