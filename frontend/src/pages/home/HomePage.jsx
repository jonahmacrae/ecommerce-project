import axios from "axios";
import { useSearchParams,  } from "react-router";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header.jsx";
import { ProductsGrid } from "./ProductsGrid.jsx";
import "./HomePage.css";

const BACKEND_BASE_PATH = "http://localhost:5173/";
const BACKEND_PRODUCTS_PATH = "/api/products";

export function HomePage({ cart, loadCart }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      const url = new URL(BACKEND_PRODUCTS_PATH, BACKEND_BASE_PATH);
      if (search) {
        url.searchParams.set('search', search);
      }
      const response = await axios.get(url.pathname + url.search);
      setProducts(response.data);
    };

    fetchHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
