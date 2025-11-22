import { useState } from "react";


export default function Cart() {
const [items] = useState([]); // demo only


return (
<div className="section">
<h1 className="section-title">Your Cart</h1>
{items.length === 0 ? (
<p>Your cart is empty. Browse our <a href="/">shop</a> to add items.</p>
) : (
<ul>{items.map((it, i) => <li key={i}>{it.name} - ${it.price}</li>)}</ul>
)}
</div>
);
}