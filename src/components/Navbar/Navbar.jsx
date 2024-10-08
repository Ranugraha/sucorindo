import React from "react";
import "./Navbar.css";
import { assets, icons, menu_list_navbar } from "../../assets";

const Navbar = () => {
  return (
    <nav className="container">
      <a href="/">
        <img className="logo" src={assets.Logo} alt="" />
      </a>
      <ul className="body-2-medium-uppercase">
        {/* {menu_list_navbar.map((index, name, to) => {
          return <li key={index}>{name}</li>;
        })} */}
        <li>
          <a href="/"> Головна </a>
        </li>
        <li>
          <a href="/expert"> Про нас </a>
        </li>
        <li>
          <a href="/about-us"> Аналітика </a>
        </li>
        <li>
          <a href="/blog"> експерти </a>
        </li>
        <li>
          <a href=""> Відео </a>
        </li>
        <li>
          Напрямки Діяльності <icons.DropDown className="dropown-menu" />
        </li>
      </ul>
      <div className="nav-right">
        <button className="harmburger">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
        <button className="btn-language-normal body2-regular">UA</button>
        <button className="btn-primary-dark body-medium">Приєднатися</button>
      </div>
    </nav>
  );
};

export default Navbar;
