import React, { useState, useEffect } from "react";
import { Product } from "../../components/interfaces";
import PageWrapper from "../PageWrapper";
import { getProducts } from "../ApiHelper";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Spinner from "../../components/Spinner/Spinner";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsPage = () => {
  const [loadingState, setLoadingState] =
    useState<"WAITING" | "LOADED" | "ERROR">("WAITING");
  const [data, setData] = useState<Product[]>([]);

  const fetchProducts = async () => {
    setLoadingState("WAITING");
    const { data, errorOccurred } = await getProducts();
    setData(data);
    setLoadingState(errorOccurred ? "ERROR" : "LOADED");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let content;
  if (loadingState === "WAITING")
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  else if (loadingState === "LOADED")
    content = (
      <CardsContainer>
        {data.map((product) => (
          <ProductCard {...product} key={product.ProductID} />
        ))}
      </CardsContainer>
    );
  else
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );

  return <PageWrapper>{content}</PageWrapper>;
};

export default ProductsPage;
