import axios from "axios";
import {useNavigate} from "react-router";
import { formatCurrency } from "../../utils/money.js"

const BACKEND_ORDERS_URL = "/api/orders";
const NAVIGATE_ORDERS_URL = "/orders";

export function PaymentSummary({ paymentSummary, loadCart }) {
  const navigate = useNavigate();

  const createOrder = async () => {
    await axios.post(BACKEND_ORDERS_URL);
    await loadCart();
    await navigate(NAVIGATE_ORDERS_URL);
  }

  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>

      {paymentSummary && (
        <>
          <div className="payment-summary-row">
            <div>Items ({paymentSummary.totalItems}):</div>
            <div className="payment-summary-money" data-testid="product-cost">
              ${formatCurrency(paymentSummary.productCostCents)}
            </div>
          </div>

          <div className="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div className="payment-summary-money" data-testid="shipping-cost">
              ${formatCurrency(paymentSummary.shippingCostCents)}
            </div>
          </div>

          <div className="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div className="payment-summary-money" data-testid="total-cost-before-tax">
              ${formatCurrency(paymentSummary.totalCostBeforeTaxCents)}
            </div>
          </div>

          <div className="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money" data-testid="tax">
              ${formatCurrency(paymentSummary.taxCents)}
            </div>
          </div>

          <div className="payment-summary-row total-row">
            <div>Order total:</div>
            <div className="payment-summary-money" data-testid="total-cost">
              ${formatCurrency(paymentSummary.totalCostCents)}
            </div>
          </div>

          <button className="place-order-button button-primary" data-testid="place-order-button" onClick={paymentSummary.totalCostCents ? createOrder : () => {}}>
            Place your order
          </button>
        </>
      )}
    </div>
  );
}
