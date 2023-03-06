import { getAllCartParsed } from "@/utils/cart";
import { useState, useEffect } from "react"

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getAllCartParsed())
  }, []);

  return <>
    products in cart: 
    {cart.map(x => x.product).join("\n\n")}
  </>;
}
