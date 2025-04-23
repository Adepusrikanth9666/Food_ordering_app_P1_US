import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  return (
    <div className="header-cotainer">
      <div className="header-img-container">
        <Link to={"/"}>
          <img
            src="https://i.pinimg.com/736x/59/28/ef/5928ef7cae44045ab92df313c6fc18bf.jpg"
            height={180}
            width={180}
            alt="food_img"
          />
        </Link>
      </div>
      <div className="header-links-container">
        <Link className="header-link" to={"/cart"}>
          Cart
        </Link>
        <Link className="header-link" to={"/paymentInfo"}>
          Payment
        </Link>
        <Link className="header-link" to={"/login"}>
          Login
        </Link>
        <Link className="header-link" to={"/menuItems"}>
          MenuItems
        </Link>
      </div>
    </div>
  );
};

export default Header;
