import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router";

import "./header.css";

export function Header({ cart }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  const searchClick = () => {
    console.log("Searching for:", search);
    navigate(`/?search=${search}`);
    setSearch("");
  };

  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src="images/logo-white.png" />
          <img className="mobile-logo" src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="search-button" onClick={searchClick}>
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
