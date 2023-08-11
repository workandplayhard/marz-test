import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "../interfaces";

describe("ProductCard", () => {
  const product: Product = {
    ProductID: 0,
    ProductPhotoURL: "https://example.com/product.jpg",
    ProductName: "Sample Product",
    ProductStatus: "Active",
  };

  it("renders ProductCard", () => {
    render(<ProductCard {...product} />);
    const photoElement = screen.getByAltText("product");
    expect(photoElement).toBeInTheDocument();
    const nameElement = screen.getByText(product.ProductName);
    expect(nameElement).toBeInTheDocument();
    const statusElement = screen.getByText(product.ProductStatus);
    expect(statusElement).toBeInTheDocument();
  });
});
