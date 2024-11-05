export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(name); // Call the onSelect function with the item's name
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}> {/* Add a pointer cursor for better UX */}
      <p>{name}</p>
      <p>Buy {quantity} in {category}</p>
    </div>
  );
}
