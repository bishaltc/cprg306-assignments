
export default function Item({ name, quantity, category, onSelect }) {
  

  return (
    <div >
      <p>{name}</p>
      <p>Buy {quantity} in {category}</p>
    </div>
  );
}
