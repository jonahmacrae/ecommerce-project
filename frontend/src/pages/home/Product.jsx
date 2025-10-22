import { useState } from "react";
import axios from "axios";
import { formatCurrency } from "../../utils/money.js";

const BACKEND_CART_ITEMS_URL = "/api/cart-items";

export function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);

  const addToCart = async () => {
    await axios.post(BACKEND_CART_ITEMS_URL, {
      productId: product.id,
      quantity,
    });

    await loadCart();
    await setShowAdded(true);
    await setTimeout(() => setShowAdded(false), 2000);
  };

  const selectQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">${formatCurrency(product.priceCents)}</div>

      <div className="product-quantity-container">
        <select
          value={quantity}
          onChange={selectQuantity}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart" style={{ opacity: showAdded ? 1 : 0 }}>
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
