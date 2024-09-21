import React from "react";
import { useCartContext } from "../../contexts/CartContext";
import "./Cart.css"; // Adjust the import path as necessary
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CartPage() {
  const { cart, dispatch } = useCartContext();

  const handleIncrease = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    dispatch({ type: "UPDATE_CART", payload: updatedCart });
  };

  const handleDecrease = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    dispatch({ type: "UPDATE_CART", payload: updatedCart });
  };

  const handleRemove = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    dispatch({ type: "UPDATE_CART", payload: updatedCart });
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart__page">
      <h1>Your Cart</h1>
      <div>
        <Link to="/">Add More items</Link>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart__items">
          {cart.map((item) => (
            <div key={item.id} className="cart__item">
              <img
                src={item.image}
                alt={item.title}
                className="cart__item__image"
              />
              <div className="cart__item__details">
                <h2>{item.title}</h2>
                <p>{item.price.toFixed(2)} - Rs</p>
                <div className="quantity__controls">
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)}>+</button>
                </div>
                <button
                  className="remove__button"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2>Total Amount: {totalAmount.toFixed(2)} - Rs</h2>
    </div>
  );
}

export default CartPage;
