import React from "react";
import "./ProductDetail.css";
import { useCartContext } from "../contexts/CartContext";
import toast from "react-hot-toast";

function ProductDetail({ product }) {
  const { cart, dispatch } = useCartContext();
  if (!product) {
    return <div>No product details available.</div>;
  }

  const addItemToCart = (product) => {
    // if the product is already in the cart, increment the quantity
    // if the product is not in the cart, add it to the cart
    if (cart?.find((item) => item?.id === product?.id)) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
      toast.success("Item added to cart");
      dispatch({ type: "UPDATE_CART", payload: updatedCart });
    } else {
      dispatch({
        type: "UPDATE_CART",
        payload: [...cart, { ...product, quantity: 1 }],
      });
      toast.success("Item added to cart");
    }
  };

  return (
    <div className="product__detail">
      <img src={product.image} alt={product.title} className="product__image" />
      <h2 className="product__title">{product.title}</h2>
      <p className="product__description">{product.description}</p>
      <p className="product__price">${product.price.toFixed(2)}</p>
      <button
        className="add__to__cart__button"
        onClick={() => addItemToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
