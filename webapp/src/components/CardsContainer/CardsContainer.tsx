import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardsContainer = (props: Props) => {
  return (
    <div className="p-4 bg-neutral-500 grid grid-cols-3 gap-4">
      {props.children}
    </div>
  );
};

export default CardsContainer;
