/* eslint-disable react/jsx-key */
import { getAllCartParsed } from "@/utils/cart";
import { useState, useEffect } from "react";
import CartProduct from "./components/cartProduct";

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getAllCartParsed());
  }, []);

  return (
    <div>
      {cart[0]
        ? cart.map((data) => {
            return <CartProduct data={data} />;
          })
        : "Empty cart"}
    </div>
  );
}
