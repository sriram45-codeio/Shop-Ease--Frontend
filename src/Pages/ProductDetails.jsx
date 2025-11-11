import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../CssFolder/ProductDetails.css';

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        setProduct(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div style={{ margin: "50%" }}><img src="Loading.gif" alt="Loading..." /></div>;
  }

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        onError={(e) => e.target.src = "/images/no-image.png"} 
      />
      <p>{product.description}</p>
      <p className="price">Price: ₹{product.price}</p>
      <button className="buy-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
