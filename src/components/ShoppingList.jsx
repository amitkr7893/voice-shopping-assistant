export default function ShoppingList({ items }) {
  if (items.length === 0) {
    return <p>No items added yet</p>
  }

  return (
    <ul className="list">
      {items.map(i => (
        <li key={i.id}>
          <span>
            {i.name} × {i.quantity}
          </span>
          <span className="badge">{i.category}</span>
        </li>
      ))}
    </ul>
  )
}