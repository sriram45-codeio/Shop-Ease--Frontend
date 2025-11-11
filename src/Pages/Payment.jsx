import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../CssFolder/Payment.css';

const PaymentPage = ({ clearCart }) => {
  const [method, setMethod] = useState("upi");
  const navigate = useNavigate();

  const handlePayment = () => {
    alert(`Payment successful using ${method.toUpperCase()}`);

    if (clearCart) {
      clearCart();
    }

    navigate("/");
  };

  return (
    <div className="payment-container">
      <h2>Payment Options</h2>
      <div className="payment-methods">
        <label>
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={method === "upi"}
            onChange={(e) => setMethod(e.target.value)}
          />
          UPI (Google Pay / PhonePe)
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={method === "card"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Credit / Debit Card
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={method === "cod"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Cash on Delivery (COD)
        </label>
      </div>

      {method === "card" && (
        <div className="card-details">
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiry Date (MM/YY)" />
          <input type="text" placeholder="CVV" />
        </div>
      )}

      {method === "upi" && (
        <div className="upi-details">
          <input type="text" placeholder="Enter your UPI ID" />
        </div>
      )}

      <button className="confirm-btn" onClick={handlePayment}>
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentPage;
