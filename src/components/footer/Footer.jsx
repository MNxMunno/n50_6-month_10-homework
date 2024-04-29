import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import youtuube from "../../assets/images/youtube.svg";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="cards">
            <div className="card">
              <img src={logo} alt="logo" />
              <a href="#">www.company name.com</a>
              <a href="#">companyname@gmail.com</a>
              <a href="#">Phone: +7 485-118-03-25</a>
            </div>
            <div className="card">
              <h2>Home</h2>
              <a href="#">Landingpage</a>
              <a href="#">Documentation</a>
              <a href="#">Referral Program</a>
              <a href="#">UI & UX Design</a>
              <a href="#">Web Design</a>
            </div>
            <div className="card">
              <h2>Menu</h2>
              <a href="#">Landingpage</a>
              <a href="#">Documentation</a>
              <a href="#">Referral Program</a>
              <a href="#">UI & UX Design</a>
              <a href="#">Web Design</a>
            </div>
            <div className="card">
              <h2>Company</h2>
              <a href="#">Landingpage</a>
              <a href="#">Documentation</a>
              <a href="#">Referral Program</a>
              <div className="links">
                <a href="https://www.instagram.com/" target="_blank">
                  <img src={instagram} alt="logo" />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <img src={facebook} alt="logo" />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <img src={twitter} alt="logo" />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <img src={youtuube} alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
