// Components
import { ShoppingCartItem, ShoppingCartPayments } from "./";

const ShoppingCart = ({ cartItems, onRemoveItemFromCart, onEmptyCart }) => {
  const message =
    cartItems.length === 0
      ? "No items in Cart"
      : `
        ${cartItems.length} ${cartItems.length >= 2 ? "Shirts" : "Shirt"} in Cart`;

  return (
    <div className="shopping-cart">
      <div className="cart-info">
        <h2 className="cart-title">Shopping Cart</h2>
        {message}
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          ""
        ) : (
          <ShoppingCartItem cartItems={cartItems} onRemoveItemFromCart={onRemoveItemFromCart} />
        )}
      </div>

      <ShoppingCartPayments cartItems={cartItems} onEmptyCart={onEmptyCart} />
    </div>
  );
};

export default ShoppingCart;
