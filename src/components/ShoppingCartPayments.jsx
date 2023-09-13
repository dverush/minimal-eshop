import { useState } from "react";

// Components
import { ShoppingCartActions, Button } from "./";

// Discount Code
import { discountCodes } from "../data";

const ShoppingCartPayments = ({ cartItems, onEmptyCart }) => {
  const [discountInput, setDiscountInput] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(null);

  const cartTotalPrice = cartItems.reduce((acc, shoppingItem) => acc + shoppingItem.price, 0);
  const cartTotalDiscountPrice = cartTotalPrice - (discountPercentage / 100) * cartTotalPrice;

  const handleDiscountInput = (e) => {
    setDiscountInput(e.target.value.toUpperCase());
  };

  const handleDiscountForm = (e) => {
    e.preventDefault();

    const isDiscountCodeValid = discountCodes.some(
      (discountCode) => discountCode.code === discountInput
    );

    if (!isDiscountCodeValid) {
      setDiscountInput("");
      return;
    }

    const discountCodeIndex = discountCodes.findIndex(
      (discountCode) => discountCode.code === discountInput
    );

    setDiscountCode(discountCodes[discountCodeIndex].code);
    setDiscountPercentage(discountCodes[discountCodeIndex].discount);
    setDiscountInput("");
  };

  const renderedCartPayment =
    cartItems.length === 0 ? (
      ""
    ) : (
      <div className="cart-payments">
        <div className="cart-price-actions">
          {!discountPercentage ? (
            <ShoppingCartActions onEmptyCart={onEmptyCart}>{cartTotalPrice}</ShoppingCartActions>
          ) : (
            <>
              <ShoppingCartActions onEmptyCart={onEmptyCart}>
                {cartTotalDiscountPrice}
              </ShoppingCartActions>

              <div className="cart-price-discount">
                <p className="cart-price-discount-lowered">{cartTotalPrice.toFixed(2)}€</p>
                <p className="cart-price-discount-off">{discountPercentage}% OFF</p>
              </div>

              <p className="coupon-code-applied">
                <span>{discountCode}</span> is applied
              </p>
            </>
          )}
        </div>

        <form className="coupon-container" onSubmit={handleDiscountForm}>
          <input
            type="text"
            placeholder="Enter your coupon code..."
            className="coupon-code"
            value={discountInput}
            onChange={handleDiscountInput}
          />
          <Button>Submit</Button>
        </form>
      </div>
    );

  return <div>{renderedCartPayment}</div>;
};

export default ShoppingCartPayments;
