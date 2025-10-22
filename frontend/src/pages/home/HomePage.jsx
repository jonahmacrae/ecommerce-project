import axios from "axios";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header.jsx";
import { ProductsGrid } from "./ProductsGrid.jsx";
import "./HomePage.css";

const BACKEND_PRODUCTS_URL = "/api/products";

export function HomePage({ cart, loadCart }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      const url = search ? `${BACKEND_PRODUCTS_URL}?search=${search}` : BACKEND_PRODUCTS_URL;
      
      const response = await axios.get(url);
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
