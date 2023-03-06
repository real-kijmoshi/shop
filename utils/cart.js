import { parser } from "./products";

export const addToCart = (product) => {
  if (typeof window !== "undefined") {
    const rawCart = localStorage.getItem("cart");
    console.log("d: " + rawCart);
    const cart = JSON.parse(rawCart != null ? rawCart : "[]");

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getAllCartParsed = () => {
  if (typeof window !== "undefined") {
    const rawCart = localStorage.getItem("cart");
    const cart = JSON.parse(![null, ""].includes(rawCart) ? rawCart : "[]");

    return cart.map(parser);
  }
};

