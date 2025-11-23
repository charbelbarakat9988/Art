import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import './App.css';
import HeroSlider from "./HeroSlider";

export default function App() {
  const [cart, setCart] = useState([]); // <--- cart state lifted here

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    alert(JSON.stringify(product, null, 2)); // JSON-style alert
  };

  return (
    <Router>
      
        
      <div className="site-root">
        <header className="navbar">
          <div className="container nav-inner">
            <Link to="/" className="brand">ArtWithLove</Link>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/cart" className="cart-link">Cart ({cart.length})</Link>
            </nav>
          </div>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">© {new Date().getFullYear()} ArtWithLove — Handmade with ❤️</div>
        </footer>
      </div>
    </Router>
  );
}
