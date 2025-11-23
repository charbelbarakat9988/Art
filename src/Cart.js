export default function Cart({ cart }) {

  return (
    <div className="section">
      <h1 className="section-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Browse our <a href="/">shop</a> to add items.</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
