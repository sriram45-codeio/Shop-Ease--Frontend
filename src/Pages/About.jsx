import React from 'react';
import '../CssFolder/About.css';

function About() {
  return (
    <div className="about-container">
      <header className="about-hero">
        <h1>About ShopEase</h1>
        <p>Your one-stop online store for gadgets & accessories</p>
      </header>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          At ShopEase, we aim to provide top-quality gadgets and accessories at affordable prices.
          Our mission is to make online shopping seamless, enjoyable, and reliable for everyone.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide variety of products</li>
          <li>Fast and secure delivery</li>
          <li>Responsive customer support</li>
          <li>Trusted by thousands of happy customers</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          To be the most customer-centric online store where people can find everything they need
          with ease and confidence.
        </p>
      </section>
    </div>
  );
}

export default About;
