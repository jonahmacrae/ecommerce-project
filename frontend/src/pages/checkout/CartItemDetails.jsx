import { useState } from "react";
import axios from "axios";
import { formatCurrency } from "../../utils/money.jsx";

export function CartItemDetails({ cartItem, loadCart }) {
  const [isQuantityUpdating, setIsQuantityUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const changeUpdateInput = async () => {
    if (isQuantityUpdating) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      await setIsQuantityUpdating(false);
    } else {
      setIsQuantityUpdating(true);
    }
  };

  const quantityKeyPressed = (e) => {
    if (e.key === "Enter") {
      changeUpdateInput();
    } else if (e.key === "Escape") {
      setIsQuantityUpdating(false);
    }
  };

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          ${formatCurrency(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {isQuantityUpdating ? (
              <input
                type="text"
                value={quantity}
                onKeyDown={quantityKeyPressed}
                onChange={(e) => setQuantity(e.target.value)}
                className="quantity-update-input"
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={changeUpdateInput}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
