import React, { Component } from "react";
import about from "../../assets/images/about__img.png";

export class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="container">
          <div className="cards">
            <div className="card">
              <img src={about} alt="" />
            </div>
            <div className="card">
              <p className="title">About us</p>
              <h2>
                Food Stalls with Persons but to Product marketing plane
                catlogues etc to.
              </h2>
              <p>
                There are many things are needed to start the Fast Food
                Business. You need not only Just Food Stalls with Persons but
                also equipment make your marketing plane Effective.
              </p>
              <button className="about__btn">Read More</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
