import React from "react";
import { useNavigate } from "react-router-dom";
import "../CssFolder/Cart.css";

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="shop-now-btn" onClick={() => navigate("/Shop")}>
            Shop Now
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>₹{item.price}</p>
                </div>

                <div className="qty-buttons">
                  <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button className="cart-remove-btn" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button className="pay-now-btn" onClick={() => navigate("/Payment")}>
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
