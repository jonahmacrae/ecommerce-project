import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage.jsx";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/orders/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";
import "./App.css";

const BACKEND_CART_ITEMS_URL = "/api/cart-items?expand=product";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get(BACKEND_CART_ITEMS_URL);
      setCart(response.data);
    }

    fetchAppData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
