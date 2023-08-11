import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardsContainer from "./CardsContainer";

export default {
  title: "Cards Container",
  component: CardsContainer,
} as ComponentMeta<typeof CardsContainer>;

const Template: ComponentStory<typeof CardsContainer> = (args) => (
  <CardsContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <div className="w-8 h-8 bg-slate-900" />,
    <div className="w-8 h-8 bg-slate-900" />,
    <div className="w-8 h-8 bg-slate-900" />,
    <div className="w-8 h-8 bg-slate-900" />,
    <div className="w-8 h-8 bg-slate-900" />,
    <div className="w-8 h-8 bg-slate-900" />,
    <div className="w-8 h-8 bg-slate-900" />,
  ],
};
