import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
const data = ["Home", "About us", "Menu", "Features", "Contact us"];

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <div className="nav__items">
              <a href="#" className="logo">
                <img src={logo} alt="img" />
              </a>
              <div className="nav__links">
                {data?.map((el, inx) => (
                  <a href="#" key={inx} className="nav__link">
                    {el}
                  </a>
                ))}
              </div>
            </div>
            <button className="nav__btn">Booking Now</button>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
