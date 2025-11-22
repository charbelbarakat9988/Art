import { useState } from "react";
import { products } from "./products";


export default function Home() {
const [cart, setCart] = useState([]);


const addToCart = (product) => {
setCart(prev => [...prev, product]);
// In a real app you'd lift state up or use context. Using alert for demo.
alert(`${product.name} added to cart.`);
};


return (
<div>
<section className="hero">
<div className="hero-inner container">
<div>
<h1 className="hero-title">Art With Love</h1>
<p className="hero-sub">Handmade paintings, seasonal gifts, and cosy Christmas art — perfect for gifting.</p>
<a href="#products" className="btn btn-primary">Shop Now</a>
</div>
<div className="hero-visual" aria-hidden>
{/* Local uploaded asset used as a placeholder visual. Path: /mnt/data/A_digital_Entity_Relationship_Diagram_(ERD)_illust.png */}
<img src={'/mnt/data/A_digital_Entity_Relationship_Diagram_(ERD)_illust.png'} alt="art hero" />
</div>
</div>
</section>


<section id="products" className="section">
<h2 className="section-title">Featured Products</h2>
<div className="grid">
{products.map((item) => (
<article key={item.id} className="card">
<div className="card-media">
<img src={item.image} alt={item.name} />
</div>
<div className="card-body">
<h3 className="card-title">{item.name}</h3>
<p className="card-price">${item.price.toFixed(2)}</p>
<div className="card-actions">
<button className="btn" onClick={() => addToCart(item)}>Add to Cart</button>
<button className="btn btn-ghost">View</button>
</div>
</div>
</article>
))}
</div>
</section>
</div>
);
}