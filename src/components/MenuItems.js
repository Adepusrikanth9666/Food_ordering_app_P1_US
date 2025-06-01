import React from "react";
import Header from "./Header";
import "./styles/menuItems.css";
import foodItems from "../mock/foodItems.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducers/cartSlice";
import { selectCartItem } from "../redux/selectors/cartSlice";

const MenuItems = () => {
  const cartItems = useSelector(selectCartItem);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  console.log(cartItems, "cartItems");
  return (
    <>
      <Header />
      <div className="menu-container">
        <h1 className="menu-heading">Explore Our Delicious Dishes 🍽️</h1>
        <div className="menu-grid">
          {foodItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <h2 className="menu-title">{item.name}</h2>
              <p className="menu-description">{item.description}</p>
              <div className="menu-info">
                <span className="menu-price">₹{item.price}</span>
                <span className="menu-rating">⭐ {item.rating}</span>
              </div>
              <div className="menu-actions">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="btn-cart"
                >
                  Add to Cart
                </button>
                <button
                  // onClick={() => handleWishlist(item)}
                  className="btn-wishlist"
                >
                  ❤️ Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuItems;
