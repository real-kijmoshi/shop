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

    const products = new Map();
    cart.forEach((product) => {
      const data = parser(product);
      data.quantity = products.get(product)?.quantity + 1 || 1;

      products.set(product, data);
    });

    const productsArray = [];

    products.forEach((product) => {
      productsArray.push(product);
    });

    return productsArray;
  }
};

export const getQuantity = id => {
  return getAllCartParsed().filter(item => item.id == id)[0].quantity
}

export const deleteOne = id => {
  const rawCart = localStorage.getItem("cart");
  console.log("d: " + rawCart);
  let cart = JSON.parse(rawCart != null ? rawCart : "[]");

  const index = cart.indexOf(id)
  cart = cart.slice(0, index).concat(cart.slice(index+1))

  localStorage.setItem("cart", JSON.stringify(cart));
  return getQuantity(id)
}

export const getNumberOfItems = () => {
  if (typeof window != "undefind") {
    const rawCart = localStorage.getItem("cart");
    const cart = JSON.parse(![null, ""].includes(rawCart) ? rawCart : "[]");

    return cart.length;
  }
};
