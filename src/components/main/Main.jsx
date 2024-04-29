import React, { Component } from "react";
import Hero from "../hero/Hero";
import Feature from "../feature/Feature";

export class Main extends Component {
  render() {
    return (
      <main>
        <Hero />
        <Feature />
      </main>
    );
  }
}

export default Main;
