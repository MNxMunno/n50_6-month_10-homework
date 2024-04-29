import React, { Component } from "react";
import Hero from "../hero/Hero";
import Feature from "../feature/Feature";
import About from "../about/About";
import Products from "../products/Products";
import Testimonial from "../testimonial/Testimonial";
import Contact from "../contact/Contact";

export class Main extends Component {
  render() {
    return (
      <main>
        <Hero />
        <Feature />
        <About />
        <Products />
        <Testimonial />
        <Contact />
      </main>
    );
  }
}

export default Main;
