// Components
import { Button } from "./";

const ShoppingCartActions = ({ children, onEmptyCart }) => {
  return (
    <div className="cart-actions">
      <p className="cart-price-total">
        Total: <span>{children.toFixed(2)}</span>
      </p>
      <Button onClick={onEmptyCart}>Remove all</Button>
    </div>
  );
};

export default ShoppingCartActions;
