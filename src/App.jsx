import React, { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./scss/index.scss";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    );
  }
}

export default App;
