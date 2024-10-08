import React from "react";
import { useContext } from "react";
import { Shopcontext } from "../Context/Shopcontex";
import { Link } from "react-router-dom";

const Productitem = ({ id, name, price, image }) => {
  const { currency } = useContext(Shopcontext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default Productitem;
