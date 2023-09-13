import { useState } from "react";

// Data
import { items } from "./data";

// Components
import { ShoppingItems, ShoppingCart } from "./components";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItemToCart = (item) => {
    const isAdded = cartItems.some((cartItem) => cartItem.id === item.id);

    if (isAdded) return;

    setCartItems((currentCartItems) => [...currentCartItems, item]);
  };

  const handleRemoveItemFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const handleEmptyCart = () => {
    setCartItems([]);
  };

  return (
    <div className="container">
      <ShoppingItems shoppingItems={items} onAddItemToCart={handleAddItemToCart} />
      <ShoppingCart
        cartItems={cartItems}
        onRemoveItemFromCart={handleRemoveItemFromCart}
        onEmptyCart={handleEmptyCart}
      />
    </div>
  );
};

export default App;
