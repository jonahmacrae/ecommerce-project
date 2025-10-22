import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header.jsx";
import { OrdersGrid } from "./OrdersGrid.jsx";
import "./OrdersPage.css";

const BACKEND_ORDERS_URL = "/api/orders?expand=products";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get(BACKEND_ORDERS_URL);
      setOrders(response.data);
    }

    fetchOrderData();
  }, []);

  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
