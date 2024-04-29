import React, { Component } from "react";
import img from "../../assets/images/gril.png";
import stars from "../../assets/images/stars.png";

export class Testimonial extends Component {
  render() {
    return (
      <section className="testimonial">
        <div className="container">
          <div className="content">
            <p className="title__org">Testimonial</p>
            <h1 className="title">Making Food great again and again</h1>
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc to make your.
            </p>
            <div className="img">
              <img src={img} alt="img" />
            </div>
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc very successful to make your.
            </p>
            <div className="star__img">
              <img src={stars} alt="img" />
            </div>
            <h3>Augusta W. Reynoso</h3>
            <p>UI&UX DeSIGNER</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
