import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { MdOutlineMenu, MdFeaturedPlayList, MdContacts } from "react-icons/md";
const data = [
  {
    title: "Home",
    img: <IoIosHome />,
  },
  {
    title: "About us",
    img: <FcAbout />,
  },
  {
    title: "Menu",
    img: <MdOutlineMenu />,
  },
  {
    title: "Features",
    img: <MdFeaturedPlayList />,
  },
  {
    title: "Contact us",
    img: <MdContacts />,
  },
];

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
                  <div className="links" key={inx}>
                    <a href="#" className="nav__link">
                      {el.title}
                    </a>
                    <a href="#" className="nav___btn">
                      {el.img}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="nav__btns">
              <button className="nav__btn">Booking Now</button>
              <button className="menu">
                <MdOutlineMenu />
              </button>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
