import HeroSlider from "./HeroSlider";
import { products } from "./products";

export default function Home({ addToCart }) {
  return (
    <div>
      <HeroSlider />

      <section className="hero">
        <div className="hero-inner container">
          <div>
            <h1 className="hero-title">Art With Love</h1>
            <p className="hero-sub">Handmade paintings, seasonal gifts, and cosy Christmas art — perfect for gifting.</p>
            <a href="#products" className="btn btn-primary">Shop Now</a>
          </div>
          <div className="hero-visual" aria-hidden>
            <img src={'/artwithlove.jpg'} alt="/artwithlove" />
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
