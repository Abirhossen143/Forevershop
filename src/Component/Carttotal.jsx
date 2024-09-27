import React from "react";
import { useContext } from "react";
import { Shopcontext } from "../Context/Shopcontex";
import Title from "./Title";

const CartTotal = () => {
  const { currency, deliveryfee, getCartAmount } = useContext(Shopcontext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {deliveryfee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryfee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
