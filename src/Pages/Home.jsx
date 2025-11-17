import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../CssFolder/Home.css';

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://shop-ease-backend-m297.onrender.com/products')
      .then((res) => {
        setProducts(res.data.data.slice(-4));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
if (loading) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%"
    }}>
      <img src="Loading.gif" alt="Loading..." />
    </div>
  );
}


  return (
    <div>
      <header className="hero-section">
        <h1>Welcome to ShopEase</h1>
        <p>Your one-stop online store for gadgets & accessories</p>
        <button className="shop-btn" onClick={() => navigate('/Shop')}>
          Shop Now
        </button>
      </header>

      <section className="products-section">
        <h2>Trending Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/ProductDetails/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  onError={(e) => e.target.src = "/images/no-image.png"}
                />
                <h3>{product.title}</h3>
              </Link>
              <p className="price">₹{product.price}</p>
              <button className="buy-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
