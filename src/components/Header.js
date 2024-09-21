import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

function Header() {
  const { cart } = useCartContext();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link className="header__logo" to="/">
            Payme Fintech{" "}
          </Link>
        </div>

        <div className="header__cart">
          <Link className="header__cart" to="/cart">
            Cart
            {cart?.length > 0 && (
              <span className="cart__count">
                ({""}
                {cart.length} {""})
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
