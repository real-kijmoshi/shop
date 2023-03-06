export const addToCart = (product) => {
  if (typeof window !== "undefined") {
    const rawCart = localStorage.getItem("cart");
    const cart = JSON.parse(rawCart != "" ? rawCart : "[]");

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getAllCart = () => {
  if (typeof window !== "undefined") {
    const rawCart = localStorage.getItem("cart");
    const cart = JSON.parse(rawCart != "" ? rawCart : "[]");

    return cart;
  }
};
