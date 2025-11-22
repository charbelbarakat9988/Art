import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";


export default function App() {
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
<Link to="/cart" className="cart-link">Cart</Link>
</nav>
</div>
</header>


<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/cart" element={<Cart />} />
</Routes>
</main>


<footer className="footer">
<div className="container">© {new Date().getFullYear()} ArtWithLove — Handmade with ❤️</div>
</footer>
</div>
</Router>
);
}