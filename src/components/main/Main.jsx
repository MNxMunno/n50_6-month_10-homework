import React, { Component } from "react";
import Hero from "../hero/Hero";
import Feature from "../feature/Feature";
import About from "../about/About";
import Products from "../products/Products";

export class Main extends Component {
  render() {
    return (
      <main>
        <Hero />
        <Feature />
        <About />
        <Products />
      </main>
    );
  }
}

export default Main;
