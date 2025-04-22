import React from "react";
import "./styles/home.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import MenuItems from "./MenuItems";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <Header />
      <h1>Home page</h1>
      {/* body */}

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
