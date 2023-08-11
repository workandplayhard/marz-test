import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductCard from "./ProductCard";

export default {
  title: "Product Card",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ProductID: 0,
  ProductPhotoURL: "https://loremflickr.com/320/240",
  ProductName: "Sample Product",
  ProductStatus: "Active",
};
