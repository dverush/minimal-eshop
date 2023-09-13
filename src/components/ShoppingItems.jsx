// Components
import { ShoppingItem } from "./";

const ShoppingItems = ({ shoppingItems, onAddItemToCart }) => {
  const renderedShoppingItem = shoppingItems.map((shoppingItem) => {
    return (
      <ShoppingItem
        key={shoppingItem.id}
        shoppingItemObject={shoppingItem}
        onAddItemToCart={onAddItemToCart}
      />
    );
  });

  return <ul className="shopping-items">{renderedShoppingItem}</ul>;
};

export default ShoppingItems;
