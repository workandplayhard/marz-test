import React from "react";
import { Product } from "../interfaces";

const ProductCard = (props: Product) => {
  return (
    <div className="flex flex-col items-center bg-neutral-300 border border-gray-200 rounded-lg shadow max-w-md">
      <img
        className="object-cover w-full rounded-t-lg h-32"
        src={props.ProductPhotoURL}
        alt={props.ProductPhotoURL}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {props.ProductName}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{props.ProductStatus}</p>
      </div>
    </div>
  );
};

export default ProductCard;
