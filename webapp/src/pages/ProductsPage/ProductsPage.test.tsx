import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import { GET_ALL_PRODUCTS_URL } from "../ApiHelper";

import ProductsPage from "./ProductsPage";
import { MemoryRouter } from "react-router-dom";

describe("ProductsPage", () => {
  const renderPage = () =>
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );

  it("shouldDisplayLoadingSpinner", () => {
    renderPage();
    expect(screen.getByTestId(`loading-spinner-container`)).toBeInTheDocument();
  });

  it("shouldDisplayProducts", async () => {
    const response = {
      data: [
        {
          ProductID: 1,
          ProductName: "Hat",
          ProductPhotoURL: "http://fake-image.com/image1",
          ProductStatus: "Active",
        },
        {
          ProductID: 2,
          ProductName: "Shoes",
          ProductPhotoURL: "http://fake-image.com/image2",
          ProductStatus: "Active",
        },
        {
          ProductID: 3,
          ProductName: "Pants",
          ProductPhotoURL: "http://fake-image.com/image3",
          ProductStatus: "InActive",
        },
      ],
    };
    const server = setupServer(
      rest.get(GET_ALL_PRODUCTS_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(response));
      })
    );
    server.listen();
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("Hat")).toBeInTheDocument();
    });
    expect(
      screen.getByAltText("http://fake-image.com/image1")
    ).toBeInTheDocument();
    expect(screen.getByText("Shoes")).toBeInTheDocument();
    expect(
      screen.getByAltText("http://fake-image.com/image2")
    ).toBeInTheDocument();
    expect(screen.getByText("Pants")).toBeInTheDocument();
    expect(
      screen.getByAltText("http://fake-image.com/image3")
    ).toBeInTheDocument();
    server.close();
  });

  it("shouldDisplayErrorMessage", async () => {
    const response = {
      data: [],
      message: "Error",
    };
    const server = setupServer(
      rest.get(GET_ALL_PRODUCTS_URL, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json(response));
      })
    );
    server.listen();
    renderPage();
    await waitFor(() => {
      expect(
        screen.getByText("An error occurred fetching the data!")
      ).toBeInTheDocument();
    });
    server.close();
  });
});
