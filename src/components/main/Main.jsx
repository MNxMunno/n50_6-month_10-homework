import React, { Component } from "react";
import Hero from "../hero/Hero";
import Feature from "../feature/Feature";
import About from "../about/About";

export class Main extends Component {
  render() {
    return (
      <main>
        <Hero />
        <Feature />
        <About />
      </main>
    );
  }
}

export default Main;
