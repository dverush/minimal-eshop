// Components
import { Button } from "./";

const ShoppingCartItem = ({ cartItems, onRemoveItemFromCart }) => {
  const renderedCartItems = cartItems.map((cartItem) => {
    const { id, name, price, selectedSize } = cartItem;

    return (
      <div key={id} className="cart-item">
        <h3 className="cart-item-title">{name}</h3>

        <div className="cart-item-actions">
          <p>Size: {selectedSize}</p>
          <p className="cart-item-price">{price} €</p>
          <Button onClick={() => onRemoveItemFromCart(cartItem)}>Remove</Button>
        </div>
      </div>
    );
  });

  return <>{renderedCartItems}</>;
};

export default ShoppingCartItem;
