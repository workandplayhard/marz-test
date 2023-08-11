import React from "react";
import { render, screen } from "@testing-library/react";
import CardsContainer from "./CardsContainer";

describe("<CardsContainer />", () => {
  it("renders CardsContainer children", () => {
    render(
      <CardsContainer>
        <div>Test Typography</div>
      </CardsContainer>
    );

    expect(screen.getByText("Test Typography")).toBeInTheDocument();
  });
});
