import { useState } from "react";

// Components
import { Button } from "./";

const ShoppingItem = ({ shoppingItemObject, onAddItemToCart }) => {
  const { id, name, description, price, image, sizes } = shoppingItemObject;

  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const cartItem = { id, name, price, selectedSize };

  const handleSelectedSize = (e) => {
    setSelectedSize(e.target.value);
  };

  const renderedOptions = sizes.map((size) => {
    return (
      <option key={size} value={size}>
        {size}
      </option>
    );
  });

  return (
    <li className="shopping-item" key={id}>
      <div className="item-image">
        <img src={image} alt={name} />
        <span>{price} €</span>
      </div>

      <div className="item-description">
        <div className="item-info">
          <h3 className="item-title">{name}</h3>
          <p>{description}</p>
        </div>

        <div className="item-actions">
          <select defaultValue={selectedSize} onChange={handleSelectedSize}>
            {renderedOptions}
          </select>

          <Button onClick={() => onAddItemToCart(cartItem)}>Add to Cart</Button>
        </div>
      </div>
    </li>
  );
};

export default ShoppingItem;
