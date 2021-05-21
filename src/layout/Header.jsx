import React from "react";
import "../css/Header.css";

const Header = (props) => {
  return (
    <div className="Container">
      <nav className="navBar">
        <div>
          <button>View Products</button>
        </div>
        <p>SAVOY</p>
        <div>
          <button>Cart</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
